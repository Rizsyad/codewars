function Calculator() {
    this.evaluate = string => {
      let calculateArray = string.split(' ');
  
      calculateArray = this.processParantheses(calculateArray);
  
      calculateArray = this.processOperators(calculateArray);
  
      return Number(calculateArray[0]);
    };
  
    this.processParantheses = array => {
      let updatedArray = array;
       while(updatedArray.includes('(')){
        const openParenIndex = updatedArray.lastIndexOf('(');
        const closeParenIndex = updatedArray.indexOf(')', openParenIndex);
        const lengthOfEquation = closeParenIndex - openParenIndex + 1;
        const parentheticalAsString = (updatedArray.slice((openParenIndex + 1), (closeParenIndex))).join(' ').toString();
        const evaluatedEquation = this.evaluate(parentheticalAsString);
  
        updatedArray.splice(openParenIndex, lengthOfEquation, evaluatedEquation.toString());
      };
  
      return updatedArray;
    };
  
    this.processOperators = array => {
      const operators = ['/', '*', '-', '+'];
      let updatedArray = array;
      operators.forEach((operator) => {
        while(updatedArray.includes(operator)){
            const indexOfOperator = updatedArray.indexOf(operator);
            const firstNum = Number(updatedArray[indexOfOperator - 1]);
            const secondNum = Number(updatedArray[indexOfOperator + 1]);
            const solution = this.applyOperator(firstNum, secondNum, operator).toString();
            updatedArray.splice(indexOfOperator - 1, 3, solution);
          };
      });
      return updatedArray;
    };
  
    this.applyOperator = (x, y, operator) => {
      switch (operator) {
        case '/': return x / y
        case '*': return x * y
        case '-': return x - y
        case '+': return x + y
      };
    };
  };