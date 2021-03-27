const correctTail = (body,tail) => body.slice(body.length - tail.length) == tail

console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);