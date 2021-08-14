module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let openedBrackets = bracketsConfig.map(function(item) {
    return item[0];
  });

  let closedBrackets = bracketsConfig.map(function(item) {
    return item[1];
  });

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    if (openedBrackets.includes(symbol)) {
      stack.push(symbol);
    } else if (stack.length === 0) {
      return false;
    }

  if (closedBrackets.includes(symbol)) {
      stack.pop();
    } else if (stack.length === 0) {
      return false;
    }

  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }

}
