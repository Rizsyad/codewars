const alphanumeric = (string) => /^[a-z0-9A-Z]+$/.test(string)

console.log(alphanumeric("Mazinkaiser"), true)
console.log(alphanumeric("hello world_"), false)
console.log(alphanumeric("PassW0rd"), true)
console.log(alphanumeric("     "), false)