const sakuraFall = (v) => v <= 0 ? 0 : 400 / v

console.log(sakuraFall(5), 80);
console.log(sakuraFall(10), 40);
console.log(sakuraFall(-1), 0);