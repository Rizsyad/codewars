const doubles = (s) => /(.)\1/.test(s) ? doubles(s.replace(/(.)\1/g, '')) : s

console.log(doubles('abbbzz'),'ab')
console.log(doubles('zzzzykkkd'),'ykd')
console.log(doubles('abbcccdddda'),'aca')
console.log(doubles('vvvvvoiiiiin'),'voin')
console.log(doubles('rrrmooomqqqqj'),'rmomj')
console.log(doubles('xxbnnnnnyaaaaam'),'bnyam')