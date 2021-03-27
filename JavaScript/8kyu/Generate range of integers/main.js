const generateRange = (min,max,step) => Array.from(Array(Math.floor(Math.abs((max - min) / step)) + 1), (x, index) => min + index * step)

console.log((generateRange(2, 10, 2), [2,4,6,8,10]));