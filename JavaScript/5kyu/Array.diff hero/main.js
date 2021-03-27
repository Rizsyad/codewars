const array_diff_very_fast = (a, b, c = new Set(b)) => a.filter(x => !c.has(x));

console.log(array_diff_very_fast([1,2,2,2,3], [2]), [1,3]);
console.log(array_diff_very_fast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]), [3,4]);