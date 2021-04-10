function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
        if (n % i == 0) d++;
    }
    return d;
}

console.log(getDivisorsCnt(1) , 1);
console.log(getDivisorsCnt(10) , 4);
console.log(getDivisorsCnt(11) , 2);
console.log(getDivisorsCnt(54) , 8);