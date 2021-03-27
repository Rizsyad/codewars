const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
const nextPrime = n => isPrime(++n) ? n : nextPrime(n++)

console.log(nextPrime(0), 2);
console.log(nextPrime(1), 2);
console.log(nextPrime(2), 3);
console.log(nextPrime(3), 5);
console.log(nextPrime(5), 7);
console.log(nextPrime(11), 13);
console.log(nextPrime(17), 19);
console.log(nextPrime(2971), 2999);