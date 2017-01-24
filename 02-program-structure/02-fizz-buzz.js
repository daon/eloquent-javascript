//  Exercise from: http://eloquentjavascript.net/

function fizzBuzz(n) {
    var str = '';
    if (n % 3 === 0) {
        str += 'Fizz';
    } 
    
    if (n % 5 === 0) {
        str += 'Buzz';
    }
    cc
    return !!str ? str : n;
}

function range(from, to, action) {
    for (var i=from;i<=to;i++) {
        action(i);
    }
};

range(1, 100, function(n) {
    console.log(fizzBuzz(n));
});