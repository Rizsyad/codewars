//BEST solved
const getAverage = (array) => array.reduce((a, b) => a + b) / array.length | 0;

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);