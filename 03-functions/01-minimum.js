/*
    Exercise from: http://eloquentjavascript.net/
    
    The previous chapter introduced the standard function Math.min that returns 
    its smallest argument. We can do that ourselves now. Write a function min that 
    takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

*/
(function () { 
    'use strict';
    let min = (a, b) => a <= b ? a : b;
    
    console.log(min(0, 10));
    
    console.log(min(0, -10));
})();