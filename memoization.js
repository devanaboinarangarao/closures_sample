// memoization in functions

const memoizedAddTo80 = () => {
    let cache = {};

    return function(n) {
        if(cache[n]) {
            return cache[n];
        } else {
            //some big calculation 
            console.log("take some some time");
            cache[n] = n+80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log(memoized(80));
console.log(memoized(80));