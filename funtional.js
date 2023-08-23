let states = ["kansas", "Nebraska", "North Dakota", "South Dakota"];

let numbers = [1,2,3,4,5,6,7,8,9,10];

//sum: imperative solution

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

//reduce solotion

function functionalSum(elements) {
  return elements.reduce((total,n) => {return total += n; });
}

console.log(functionalSum(numbers));

//states: imperative solution

function length(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(length(states));

//states: functional solution

function functionallength(elements) {
  return elements.reduce((lengths, state) => {
                          lengths[state] = state.length;
                          return lengths;
  }, {});
}
console.log(functionallength(states));
