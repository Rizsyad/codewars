const getCount = (str) => str.split('').filter(n => ['a', 'e', 'i', 'o', 'u'].includes(n)).length

console.log(getCount("abracadabra"), 5)