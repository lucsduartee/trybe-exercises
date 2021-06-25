let n = 10;
let str = "*";

if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    console.log(" ".repeat(n-i)+str.repeat(i));
  };
};
