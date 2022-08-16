// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.
// countVowels('Four score and seven years'); // => 9

// E (examples)
// Count all vowels in a string ("Grateful Heart") = 5

// A (approach)
// Use string prototype to sum up the vowels in the string

// T (test)

// const paragraph = 'Grateful Heart';
// const regex = /[a,e,i,o,u]/gi;
// const found = paragraph.match(regex);

// console.log(found);
// console.log(found.length);


function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }

  