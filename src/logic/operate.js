const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result = '';

  switch (operation) {
    case '+':
      result = Big(numberOne).plus(numberTwo).toString();
      break;
    case '-':
      result = Big(numberOne).minus(numberTwo).toString();
      break;
    case 'X':
      result = Big(numberOne).times(numberTwo).toString();
      break;
    case '÷':
      result = numberTwo === '0' ? 0 : Big(numberOne).div(numberTwo).toString();
      break;
    case '%':
      result = Big(numberOne).div('100').times(numberTwo).toString();
      break;
    default:
      break;
  }

  return result;
};

export default operate;
