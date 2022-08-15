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
function fibonacci_num(range){
    let i = 0;
    //loop for fibonacci
    for (let i=0;i<range;i+n=n){
        if(i%2==0){
        sum += i;
        }
    }
}

    let even = fibonacci_num(4000000);
    console.log("Even:", even);


    // function multiples_of_3_or_5(range){
    //     // accumulator variable
    //     let sum = 0;
    //     //loop for 3s
    //     for(let i=3;i<range;i+=3){
    //         //modulo operation returns 0 for multiples
    //         if(i%3==0){
    //             sum += i;
    //         }
    //     }
    //     //loop for 5s
    //     for(let i=5;i<range;i+=5){
    //         //modulo operation returns 0 for multiples
    //         //ignoring numbers already added (multiples of 3)
    //         if(i%5==0 && i%3!==0){
    //             sum += i;
    //         }
    //     }
    //     return sum;
    // }
    
    // //T compare output to test cases
    // let below10 = multiples_of_3_or_5(10);
    // console.log('Below 10: ', below10);
    // let below20 = multiples_of_3_or_5(20);
    // console.log('Below 20: ', below20);
    // let below1000 = multiples_of_3_or_5(1000);
    // console.log("Below 1000:", below1000);