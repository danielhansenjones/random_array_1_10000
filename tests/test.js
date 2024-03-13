const { generateRandomNumbers } = require("../index.js");
// The following  tests cases could be combined for efficiency, but they are separated for clarity.

test('Check the length of the array', () => {
  const numbers = generateRandomNumbers();
  expect(numbers.length).toBe(10000);
});

test('Check that all numbers are unique', () => {
  const numbers = generateRandomNumbers();
  const uniqueNumbers = new Set(numbers);
  expect(uniqueNumbers.size).toBe(10000);
});

test('Check that the array contains numbers from 1 to 10000', () => {
  const numbers = generateRandomNumbers();
  for (let i = 1; i <= 10000; i++) {
    expect(numbers).toContain(i);
  }
});

test('Check that the array does not contain any undefined, null, or NaN values', () => {
  const numbers = generateRandomNumbers();
  numbers.forEach(number => {
    expect(number).toBeDefined();
    expect(number).not.toBeNull();
    expect(Number.isNaN(number)).toBe(false);
  });
});