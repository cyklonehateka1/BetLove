const factorial = (k, s) => {
  let newArr = [];
  let myArr = [];
  let anotherArr = [];

  const checkNumber = s.forEach((item) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== item && newArr[newArr.length - 1] !== item) {
        newArr.push(item + s[i]);
      }
      //   if (newArr[i] % k !== 0) {
      //     myArr.push(item);
      //   }
      //   newArr = [];
    }
  });
  return newArr;
};

console.log(factorial(4, [19, 10, 12, 24, 25, 22]));
