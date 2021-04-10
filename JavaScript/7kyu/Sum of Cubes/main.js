function sumCubes(numbers){
    return [...Array(numbers+1).keys()].reduce(function(sum, n){
        return (n*n*n) + sum;
    }, 0)
}

[ [1, 1], [2, 9], [3, 36], [4, 100], [10, 3025], [123, 58155876] ].forEach(([n,exp]) => console.log(sumCubes(n), exp))
