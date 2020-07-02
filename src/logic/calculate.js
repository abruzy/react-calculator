import operate from './operate';

const calculate = (data, buttonName) => {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const ops = ['X', '-', '+', '÷', '%'];
  let {
    total, next, operation, result,
  } = data;
  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
    result = total;
  } else if ((buttonName === '=' && operation) || (ops.includes(buttonName) && next && operation)) {
    const newData = {
      total: parseFloat(total),
      next: parseFloat(next),
      operation,
    };
    total = operate(newData.total, newData.next, operation);
    next = null;
    result = total;
    if (buttonName !== '=') { operation = buttonName; } else { operation = null; }
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    result = null;
    operation = null;
  } else if (buttonName === '.') {
    if (!next && !total) { total = '0.'; next = '0.'; } else if (!next && operation) {
      next = '0.';
    } else if (operation && total && next) {
      next += buttonName;
    } else if (!total.includes('.') && !next.includes('.')) {
      next += '.';
      total += '.';
    }
  } else if (nums.includes(buttonName)) {
    if (!next && total) { next = buttonName; } else if (next && total && !operation) {
      total += buttonName;
      next += buttonName;
    } else if (!next && operation) {
      next = buttonName;
    } else if (!next && !total) {
      next = buttonName;
      total = buttonName;
    } else if (next && operation) {
      next += buttonName;
    }
  } else if (ops.includes(buttonName)) {
    if (!operation && total) { next = null; operation = buttonName; }
  } else if (buttonName === '%') {
    if (total && next && !operation) {
      total = operate(next, total, buttonName);
      result = total;
    } else if (total && next && operation) {
      next = operate(next, total, buttonName);
    }
  }
  return {
    total,
    next,
    operation,
    result,
  };
};

export default calculate;
