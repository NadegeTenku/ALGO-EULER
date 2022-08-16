// S (summary)
// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.
// sumNums(3); // => 6 (3 + 2 + 1)

// E (examples)
// Sum of all nums from 10: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 = 55

// A (approach)
// Count from 10 and sum all the numbers up

// T (test)

function sumNums(num) {
    sum = 0;
    if (num <= 0) {
        console.log(sum);
        return sum
    }
        else  {
        console.log(num)
        sum += num
        return sum + sumNums(num - 1);
        }
    }
    
    let test = sumNums(10);
    console.log(`sumNum = ${test}`);
