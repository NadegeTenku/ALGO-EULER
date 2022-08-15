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

var MAX = 4000000;
var f = Array(MAX).fill(0);
function fib(n) {
    if (n == 0)
    return 0;
    if (n == 1 || n == 2)
    return (f[n] = 1);

}

// function fibo_num(range){
//     let i = 0;
//     //loop for fibonacci
//     for (let i=0;i<range;i+n=n){
//         if(i%2==0){
//         sum += i;
//         }
//     }
// }

    let even = fibo_num(4000000);
    console.log("Even:", even);



    // var MAX = 1000;
 
    // // Create an array for memoization
    //  var f = Array(MAX).fill(0);
 
    // // Returns n'th Fibonacci number using table f
    // function fib(n) {
 
    //     // Base cases
    //     if (n == 0)
    //         return 0;
    //     if (n == 1 || n == 2)
    //         return (f[n] = 1);
 
    //     // If fib(n) is already computed
    //     if (f[n] > 0)
    //         return f[n];
 
    //     var k = ((n & 1) > 0) ? (n + 1) / 2 : n / 2;
 
    //     // Applying above formula [Note value n&1 is 1
    //     // if n is odd, else 0].
    //     f[n] = (n & 1) > 0 ? (fib(k) * fib(k) + fib(k - 1) * fib(k - 1)) : (2 * fib(k - 1) + fib(k)) * fib(k);
 
    //     return f[n];
    // }


    // // Computes value of first Fibonacci numbers
    // function calculateSum(n) {
    //     return fib(n + 2) - 1;
    // }
 
    // // Driver program to test above function
    //     var n = 4;
    //     document.write("Sum of Fibonacci numbers is : " + calculateSum(n) + "\n");