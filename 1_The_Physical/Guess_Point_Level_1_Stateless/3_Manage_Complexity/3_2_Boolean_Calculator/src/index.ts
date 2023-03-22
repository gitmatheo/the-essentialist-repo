export function booleanCalculator(expression: string): boolean | undefined {
  expression = expression.trim();

  if (expression === "TRUE") {
    return true;
  }

  if (expression === "FALSE") {
    return false;
  }

  if (expression.startsWith("NOT ")) {
    const value = expression.slice(4);
    return !booleanCalculator(value);
  }

  if (expression.includes("(") && expression.includes(")")) {
    const startIndex = expression.lastIndexOf("(");
    const endIndex = expression.indexOf(")", startIndex);
    const subExpression = expression.slice(startIndex + 1, endIndex);
    const value = booleanCalculator(subExpression);

    const newExpression = expression.slice(0, startIndex) + (value ? "TRUE" : "FALSE") + expression.slice(endIndex + 1);
    return booleanCalculator(newExpression);
  }

  if (expression.includes(" OR ")) {
    const [left, right] = expression.split(" OR ");
    return booleanCalculator(left) || booleanCalculator(right);
  }

  if (expression.includes(" AND ")) {
    const [left, right] = expression.split(" AND ");
    return booleanCalculator(left) && booleanCalculator(right);
  }

  return undefined;
}
