for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
let i = 0;

while (i <= 50) {
  console.log(i);
  i++;
}
let names = ["John", "Jane", "Alice", "Bob", "Mary"];

console.log(names);
names.push("David");
console.log(names);


names.pop();
console.log(names);


names.shift();
console.log(names);


names.unshift("Michael")
console.log(names)
let array = [];

for (let i = 1; i <= 10000; i++) {
  array.push(i * i);
}
console.log (array)
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

function isOdd(number) {
    return number % 2 !== 0;
  }
  console.log(isOdd(5)); 
console.log(isOdd(10));

function convertToLowercase(str) {
    return str.toLowerCase();
  }
  console.log(convertToLowercase("MY NAME IS JOHN"));

  function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = filterEvenNumbers(numbers);
console.log(filteredNumbers);