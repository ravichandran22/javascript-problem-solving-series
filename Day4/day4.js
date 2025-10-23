// 1. Check if two strings are anagrams
function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));


// 2. Find missing number in a sequence
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 5]));


// 3. Find all prime numbers up to n
function getPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

console.log(getPrimes(20));


// 4. Check if a number is an Armstrong number
function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
  return sum === num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(123));


// 5. Find sum of digits of a number
function sumOfDigits(num) {
  return num.toString().split('').reduce((sum, d) => sum + Number(d), 0);
}

console.log(sumOfDigits(1234));


// 6. Implement binary search
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));


// 7. Implement bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 8, 1, 3]));


// 8. Implement selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2]));


// 9. Find GCD (Greatest Common Divisor)
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 18));


// 10. Find LCM (Least Common Multiple)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(lcm(12, 18));


