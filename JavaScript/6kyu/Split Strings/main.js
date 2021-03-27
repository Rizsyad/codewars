const solution = (str) => (str.length % 2 ? str.concat('_') : str).match(/.{1,2}/g) || []

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
