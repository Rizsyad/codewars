const weatherInfo = (temp) => (((temp-32)  * (5/9)) > 0 ? `${(temp-32) * (5/9)} is above` : `${(temp-32) * (5/9)} is`) + ' freezing temperature'

console.log(weatherInfo(50), '10 is above freezing temperature')
console.log(weatherInfo(23),  '-5 is freezing temperature')