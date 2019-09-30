const curryMultiply = (num1) => {
    return (num2) => {
        return num1*num2;
    }
}

const fiveMultily = curryMultiply(5);
const twoMultiply = curryMultiply(2);

console.log(fiveMultily(10));
console.log(twoMultiply(10));