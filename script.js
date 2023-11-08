// задача №1
const fill = (arraySize, value) => {
  let result = [];
  for (let i = 0; i < arraySize; i += 1) {
    result.push(value);
  }
  return result;
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill))

// задача №2
const reverse = (array) => {
  let result = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }
  return result;
 };

const data1= [1, 2, 3];
console.log(reverse(data1)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  let result = [];
  for (const value of array) {
    if (value !== false && value !== undefined && value !== '' && value !== null && value !== 0) {
      result.push(value);
    }
  }
  return result;
};

const data2 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data2)) // [1, 2, 3]
