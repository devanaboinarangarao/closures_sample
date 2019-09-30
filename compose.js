const compose = (f, g) => data => f(g(data));

const multiplyBy3 = n => n*3;
const makeAbs = n => Math.abs(n);


const makeMultiplyByThreeAbs = compose(multiplyBy3, makeAbs);

console.log(makeMultiplyByThreeAbs(-50));