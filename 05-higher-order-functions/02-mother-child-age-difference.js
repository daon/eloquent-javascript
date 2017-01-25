/*
    Exercise from: http://eloquentjavascript.net/

    Using the example data set from this chapter, 
    compute the average age difference between mothers and children 
    (the age of the mother when the child is born). 
    You can use the average function defined earlier in this chapter.

    Note that not all the mothers mentioned in the data are themselves 
    present in the array. The byName object, which makes it easy to find 
    a person’s object from their name, might be useful here.
*/
var ANCESTRY_FILE = require('./ancestry');

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDiffs = ancestry
  .filter(person => person.mother && byName[person.mother])
  .map(child => child.born - byName[child.mother].born);

var averageAgeDiff = average(ageDiffs);

// Your code here.
console.log(averageAgeDiff.toFixed(1));


// → 31.2