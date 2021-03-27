const getMiddle = (s) => (s.length % 2 === 0 ) ? s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2) : s.charAt(s.length / 2)

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");