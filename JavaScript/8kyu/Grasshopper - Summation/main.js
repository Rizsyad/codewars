const summation = (num) => [...Array(num+1).keys()].reduce((a,b) => a + b, 0)

console.log(summation(1), 1)
console.log(summation(8), 36)