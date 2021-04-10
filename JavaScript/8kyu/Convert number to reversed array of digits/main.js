const digitize = (n) => String(n).split('').reverse().map(i=>Number(i))

console.log(digitize(35231),[1,3,2,5,3]);