const operation = (type, string) => {
  const strToArray = string.split('');
  const arrTransformed = strToArray.map(char => {
    if (type[char]) {
      return type[char];
    }
    return char;
  });
  return arrTransformed.join('');
}

const encode = (string) => {
  const obj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return operation(obj, string);
}

const decode = (string) => {
  const obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return operation(obj, string);
}

module.exports = {
  encode,
  decode,
}