const m = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for
for (let index = 0; index < m.length; index++) {
  console.log(index, m[index]);
}
console.log('--------------');
//Loop forEeach
// ES5
m.forEach(function(value, index) {
  // Callback
  console.log({ index, value });
});
console.log('--------------');
// ES6
m.forEach((value, index) => {
  // Callback
  console.log({ index, value });
});
console.log('--------------');
// map

// ES5
const newM = m.map(function(value, index) {
  // Callback
  console.log({ index, value });
  return {
    index: index,
    value: value,
  };
});
console.log(newM);
console.log('--------------');
// ES6
m.map((value, index) => {
  // Callback
  console.log({ index, value });
});
