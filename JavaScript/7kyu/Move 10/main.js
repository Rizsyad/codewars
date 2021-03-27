const moveTen = s => String.fromCharCode(...s.split('').map(char => ((char.charCodeAt() - 97 + 10) % 26) + 97))

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");