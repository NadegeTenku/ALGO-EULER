// S (summary)
// find the sum of all even numbers from the Fibonacci sequence from 1 - 4,000,000


// E (examples)
// First 10 numbers in Fibonacci sequence: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// Even numbers only of First 10 numbers in Fibonacci sequence: [2, 8, 34]
// Sum of First 10 (Even numbers only) in Fibonacci sequence: 44


// A (approach)
// Write a function to calculate all numbers in the Fibonacci sequence from ranging 1 - 4,000,000.
// Create an array that holds only the even numbers from the above function.


// Alternate
// Use reduce function to calculate the sum of the array.


// T (test)
// Function to calculate all numbers in the Fibonacci sequence ranging from 1 - 4,000,000.

let sum = 0;
var a = 0;
var b = 1;
while (a + b <= 4000000) {
    let c = a + b;
    a = b;
    b = c;
    if (c % 2 == 0) {
        console.log(c);
        sum += c;
    }
}
console.log(`Sum of even numbers ${sum}`);