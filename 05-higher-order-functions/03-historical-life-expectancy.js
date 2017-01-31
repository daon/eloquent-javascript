/*
    Exercise from: http://eloquentjavascript.net/

    When we looked up all the people in our data set 
    that lived more than 90 years, only the latest generation
    in the data came out. Let’s take a closer look at that phenomenon.

    Compute and output the average age of the people in the ancestry data 
    set per century. A person is assigned to a century by taking their year
    of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
    
    For bonus points, write a function groupBy that abstracts the grouping operation. 
    It should accept as arguments an array and a function that computes the group for an 
    element in the array and returns an object that maps group names to arrays of group members.
*/
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(arr, computeGroup) {
    return arr.reduce((groups, element) => {
      var group = computeGroup(element);
      
      if (!groups.hasOwnProperty(group)) {
        groups[group] = [];
      }
      
      groups[group].push(element);
      
      return groups;
    }, {});
} 

// Your code here.
var ANCESTRY_FILE = require('./ancestry');

var ancestry = JSON.parse(ANCESTRY_FILE);

var getCentury = (person) => Math.ceil(person.died/100);
var getAge = (person) => person.died - person.born;

var centuries = groupBy(ancestry, getCentury);

for (var century in centuries) {
  var averageAge = parseFloat(average(centuries[century].map(getAge)).toFixed(1));
  
  console.log(`${century}: ${averageAge}`);
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94