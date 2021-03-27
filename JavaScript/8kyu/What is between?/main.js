const between = (a,b) => [...Array(b - a + 1)].map((_, idx) => idx + a)

console.log(between(1, 4), [1, 2, 3, 4])
console.log(between(-2, 2), [-2, -1, 0, 1, 2])