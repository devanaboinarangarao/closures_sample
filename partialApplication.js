const multiply = (a,b,c) => a*b*c;

// with currying
const curryMultiply = a => b => c => a*b*c;

console.log(curryMultiply(4)(3)(10))

// with partial application we pass first one argument then after that we pass remaining argumants
const partialMultiplyByFive = multiply.bind(null, 5);

console.log(partialMultiplyByFive(2, 5));