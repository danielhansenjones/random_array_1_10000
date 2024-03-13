# Pandell Assessment

This project is a simple JavaScript application that generates an array of 10,000 unique numbers from 1 to 10,000.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Usage

To run the application, use the command `npm start`.

To run the tests, use the command `npm test`.

## Functionality

# Pandell Assessment

This project is a simple JavaScript application that generates an array of 10,000 unique numbers from 1 to 10,000.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Usage

To run the application, use the command `npm start`.

To run the tests, use the command `npm test`.

## Functionality

The main function of this application is `generateRandomNumbers`, which generates an array of 10,000 unique numbers from 1 to 10,000.

The `generateRandomNumbers` function uses the Fisher-Yates (also known as Knuth) shuffle algorithm to generate a sequence of numbers from 1 to 10,000 in a random order.
The algorithm works by iterating through the array from the last element to the first, swapping each element with an element at a random index less than or equal to the current index. This ensures that every permutation of the input is equally likely.

## Tests

The tests check the following:

- The `generateRandomNumbers` function returns an array of 10,000 numbers.
- All the numbers in the array are unique.
- The array contains all numbers from 1 to 10,000.
- The array does not contain any `undefined`, `null`, or `NaN` values.

## License

This project is licensed under the terms of the MIT license.

## Tests

The tests check the following:

- The `generateRandomNumbers` function returns an array of 10,000 numbers.
- All the numbers in the array are unique.
- The array contains all numbers from 1 to 10,000.
- The array does not contain any `undefined`, `null`, or `NaN` values.

## License

This project is licensed under the terms of the MIT license.