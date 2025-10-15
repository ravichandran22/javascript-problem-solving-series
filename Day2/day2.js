// 1. Sort an array without using built-in methods

var num = [1, 34, 2, 456, 100];

const sortArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray(num));


// 2. Find intersection of two arrays

const arrayIntersection = (arr1, arr2) => 
{
  const set2 = new Set(arr2); 
  return arr1.filter(value => set2.has(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7,8 ]));

// 3. Flatten a nested array

// Using Flat()

const arr = [1, [2, [3, [4, 5]]]];
const flatArr = arr.flat(Infinity);
console.log(flatArr);

// Using reduce()

const arr = [1, [2, [3, [4, 5]]]];
const flatArr = arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? val.flat(Infinity) : val), []
);
console.log(flatArr);


// 4. Convert first letter of each word to uppercase

// Using split(), map(), join()

const str = "hello world from ravichandran";
const titleCase = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(titleCase);

// Using replace()

const str = "hello world from ravichandran";
const titleCase = str.replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCase);

// 5. Find the most frequent element in an array

const frequency = (arr) => {
    const freq = {};
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]] += 1;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

console.log(frequency([1, 1, 2, 3, 3, 4]));

// 6. Merge two arrays and remove duplicates

// Using filter() & indexOf()

const num1 = [1, 2, 3, 4];
const num2 = [3, 4, 5, 6];

const mergedArray = (arr1, arr2) => {
    return arr1.concat(arr2).filter((item, index, array) => {
    return array.indexOf(item) === index;
});
}

console.log(mergedArray(num1, num2));

// Using Loop

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const merged = arr1.concat(arr2);
const unique = [];

for (let i = 0; i < merged.length; i++) {
  if (!unique.includes(merged[i])) {
    unique.push(merged[i]);
  }
}

console.log(unique);


// 7. Count occurrences of each element in an array

const arr = [1, 2, 2, 3, 3, 3];
const counts = {};

arr.forEach(num => {
  counts[num] = (counts[num] || 0) + 1;
});

console.log(counts);


// 8. Find the sum of numbers in an array greater than a given value

const numbers = [10, 25, 5, 30, 15];
const limit = 15;

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > limit) {
        sum += numbers[i];
    }
}

console.log("Sum of numbers greater than", limit, "is:", sum);


// 9. Find common characters between two strings

const str1 = "hello";
const str2 = "world";

const commonChars = [...new Set(str1)].filter(char => str2.includes(char));

console.log(commonChars);


// 10. Rotate an array by k positions

const arr = [1, 2, 3, 4, 5];
const k = 2;
const n = arr.length;

let rotated = [];

for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = arr[i];
}

console.log("Rotated Array:", rotated);