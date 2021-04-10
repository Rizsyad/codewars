const calculator = (a,b,sign) => (Number.isInteger(a) && Number.isInteger(b)) ? (sign=='+' || sign=='-' || sign=='/' || sign=='*') ? eval(a+sign+b) : 'unknown value' : 'unknown value'

console.log(calculator(1,2,"+"), 3, "calculate");
console.log(calculator(1,2,"-"), -1, "calculate");
console.log(calculator(3,5,"*"), 15, "calculate");
console.log(calculator(6,2,"/"), 3, "calculate");
console.log(calculator(6,2,"$"), "unknown value", "calculate"); 
console.log(calculator(6,"h","*"), "unknown value", "calculate");  