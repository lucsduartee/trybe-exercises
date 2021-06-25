let n = 7;
let str = "*";

for (let i = 1; i <= n; i += 2) {
  console.log(" ".repeat((n - i)/2)+str.repeat(i));
};

