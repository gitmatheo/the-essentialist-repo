export function booleanCalculator(expression: string): boolean | undefined {
  console.log("original expression: " + expression);

  expression = expression.trim();

  //should handle single values
  if (expression === "TRUE") {
    return true;
  }
  if (expression === "FALSE") {
    return false;
  }

  //should handle NOT operator
  if (expression.includes("NOT")) {
    if (expression.startsWith("NOT")) {
      const value = expression.slice(4);
      return !booleanCalculator(value);
    } else {
      const notIndex = expression.indexOf("NOT");
      const nextWord = expression.slice(notIndex + 4);
      if (nextWord === "TRUE") {
        return booleanCalculator(expression.replace("NOT TRUE", "FALSE"));
      }
      if (nextWord === "FALSE") {
        return booleanCalculator(expression.replace("NOT FALSE", "TRUE"));
      }
    }
  }

  //should handle AND operator
  if (expression.includes("AND")) {
    const newExpressionWithoutAnd = replaceAnd(expression);
    return booleanCalculator(newExpressionWithoutAnd!);
  }

  //should handle OR operator
  if (expression.includes("OR")) {
    const finalValue = replaceOr(expression);
    return booleanCalculator(finalValue!);
  }

}

function replaceOr(expression: string): string | undefined {
  const orClause = findFirstOrClause(expression);
  if(!orClause) {
    return expression;
  }

  if (orClause === "TRUE OR TRUE" && expression.indexOf("TRUE OR TRUE") !== -1) {
    return replaceOr(expression.replace("TRUE OR TRUE", "TRUE"));
  }

  if (orClause === "TRUE OR FALSE" && expression.indexOf("TRUE OR FALSE") !== -1) {
    return replaceOr(expression.replace("TRUE OR FALSE", "TRUE"));
  }

  if (orClause === "FALSE OR TRUE" && expression.indexOf("FALSE OR TRUE") !== -1) {
    return replaceOr(expression.replace("FALSE OR TRUE", "TRUE"));
  }

  if (orClause === "FALSE OR FALSE" && expression.indexOf("FALSE OR FALSE") !== -1) {
    return replaceOr(expression.replace("FALSE OR FALSE", "FALSE"));
  }
  
}

function replaceAnd(expression: string): string | undefined {
  const andClause = findFirstAndClause(expression);
  if(!andClause) {
    return expression;
  }

  if (andClause === "TRUE AND TRUE" && expression.indexOf("TRUE AND TRUE") !== -1) {
    return replaceAnd(expression.replace("TRUE AND TRUE", "TRUE"));
  }

  if (andClause === "TRUE AND FALSE" && expression.indexOf("TRUE AND FALSE") !== -1) {
    return replaceAnd(expression.replace("TRUE AND FALSE", "FALSE"));
  }

  if (andClause === "FALSE AND TRUE" && expression.indexOf("FALSE AND TRUE") !== -1) {
    return replaceAnd(expression.replace("FALSE AND TRUE", "FALSE"));
  }

  if (andClause === "FALSE AND FALSE" && expression.indexOf("FALSE AND FALSE") !== -1) {
    return replaceAnd(expression.replace("FALSE AND FALSE", "FALSE"));
  }

}


booleanCalculator("TRUE OR TRUE OR TRUE AND FALSE AND FALSE AND TRUE");

function findFirstOrClause(str: string): string | undefined {
  const orClause = str.split(' AND ')
    .map(clause => clause.trim())
    .find(clause => clause.includes(' OR '));

  if (orClause) {
    const [left, right] = orClause.split(' OR ').map(part => part.trim());
    return `${left} OR ${right}`;
  }

  return undefined;
}

function findFirstAndClause(str: string): string | undefined {
  const andClause = str.split(' OR ')
    .map(clause => clause.trim())
    .find(clause => clause.includes(' AND '));

  if (andClause) {
    const [left, right] = andClause.split(' AND ').map(part => part.trim());
    return `${left} AND ${right}`;
  }

  return undefined;
}



// booleanCalculator("TRUE OR FALSE AND NOT FALSE");
// console.log("nextWord: " + nextWord);
// console.log("prevWord: " + prevWord);
// "TRUE OR TRUE OR TRUE AND FALSE"
// "TRUE OR TRUE OR FALSE"
// "TRUE OR FALSE"
// "TRUE"
// expect(booleanCalculator("TRUE OR TRUE OR TRUE AND FALSE")).toBe(true);
// "TRUE OR FALSE AND NOT FALSE"
// "TRUE OR FALSE AND TRUE"
// "TRUE OR FALSE"
// "TRUE"

// expect(booleanCalculator("TRUE OR FALSE AND NOT FALSE")).toBe(true);