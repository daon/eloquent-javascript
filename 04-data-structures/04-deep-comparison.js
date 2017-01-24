/*
    Exercise from: http://eloquentjavascript.net/
    
    Deep comparison
    
    The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
    
    Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same 
    properties whose values are also equal when compared with a recursive call to deepEqual.
    
    To find out whether to compare two things by identity (use the === operator for that) or 
    by looking at their properties, you can use 
    the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly 
    exception into account: by a historical accident, typeof null also produces "object".

*/

// Your code here.
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        var props1 = Object.keys(obj1);
        var props2 = Object.keys(obj2);
        
        if (props1.length !== props2.length) {
            return false;
        }
        
        for (var i=0;i<props1.length;i++) {
            if (!deepEqual(obj1[props1[i]], obj2[props2[i]])) {
                return false;
            }
        }
        
        return true;
    }
    
    return false;
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
