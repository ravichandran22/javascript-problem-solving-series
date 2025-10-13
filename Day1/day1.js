// ------------------------------
// 1. Reverse a string  
// ------------------------------

var name = "Ravichandran";
const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
console.log(reverseStr(name));


// ------------------------------
// 2. Check if a number is even or odd
// ------------------------------

var number = 7;

const checkEvenOdd = (num) => {
    if(num % 2 === 0){
        return "even";
    }
    else {
     return "odd";
    }
}

console.log(checkEvenOdd(number));

// ------------------------------
// 3. Find the largest number in an array
// ------------------------------


// Using Math.max and spread operator

var numbers = [1, 50, 2293, 34];

const findMaxValue = (num) => {
    return Math.max(...num);
}

console.log(findMaxValue(numbers));

// using loop

var numbers = [1, 50, 2293, 34456];

const findLargestValue = (num) => {
    var largest = num[0];
    for(let i = 1; i < num.length; i++){
        if(num[i] > largest){
            largest = num[i];
        }
    }
    return largest;
}

console.log(findLargestValue(numbers));

// ------------------------------
// 4. Find the sum of numbers in an array
// ------------------------------


// Using Loop

var numbers = [1, 50, 2293, 34456];

const findSumOfArray = (num) => {
    var sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}

console.log(findSumOfArray(numbers));

// Using Reduce

var numbers = [1, 50, 2293, 34456];

const findSumOfArray = (num) => {
    return num.reduce((a,b) => a + b, 0);
}

console.log(findSumOfArray(numbers));

// ------------------------------
// 5. Count vowels in a string
// ------------------------------


// Using Regular Expression

const countVowels = (str) => {
    var matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
} 
console.log(countVowels('ravichandran'));

// Using Loop

const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript"));


// ------------------------------
// 6. Check if a string is a palindrome
// ------------------------------


var name = "Malayalam";

const isPalindrome = (str) => {
    var cleaned = str.toLowerCase();
    var reversedStr = cleaned.split('').reverse().join('');
    if(cleaned === reversedStr){
        return true
    }
    else{
        return false;
    }
    return reversedStr
}

console.log(isPalindrome(name));


// ------------------------------
// 7. Find factorial of a number
// ------------------------------



// Using a for loop

const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// Using recursion

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120


// ------------------------------
// 8. Generate Fibonacci sequence
// ------------------------------


function fibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Sequence:');

    for (let i = 1; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

fibonacci(10);


// ------------------------------
// 9. Find the second largest number in an array
// ------------------------------


const numbers = [10, 5, 20, 8, 15];

const findSecondLargetValue = (num) => {
    num.sort((a, b) => b - a);
    return secondLargest = num[1];
}
console.log(findSecondLargetValue(numbers));


// ------------------------------
// 10. Remove duplicates from an array
// ------------------------------


const removeDuplicates = (arr) => 
{
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) 
  {
      if (!uniqueArray.includes(arr[i]))
      {
          uniqueArray.push(arr[i]);
      }
  }
  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));

