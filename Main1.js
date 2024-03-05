//Do the below programs in anonymous function & IIFE


//1.Print odd numbers in an array
const numbers = [1,2,3,4,5,6,7,8,9,0];
const odds = [];
for (const num of numbers) {
  if (num % 2 != 0) {
    odds.push(num);
  }
}
console.log(odds); // [1,3,5,7,9]

(function showOddNumber(arr){
    for (let i = 0; i < arr.length; i++){ 
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
})([1,2,3,4,5,6,7,8,9,0]);

var arrayString = ["kamala kannan", "selvi", "siddharth"];

var convertStringToTitleCase = arrayString.map(function (str) {
    return str.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
});

console.log(convertStringToTitleCase);

// 2.Sum of all numbers in array

var sum = 0
const sumOfArray = function(arr){
    for (let i = 0; i < arr.length; i++){ 
        sum = sum + arr[i]
    }
    console.log(sum)
}

sumOfArray([1,2,3,4,5,6,7,8,9,10])


//Print all prime numbers from the list
const printPrimeNumber = function(arr){

    for (let i = 0; i < arr.length; i++){ 
        
        if(arr[i] == 1){
            // console.log('1 is neither prime nor compsite number')
            isPrime = false;
        }
        else if(arr[i]>1){
            // console.log(i)
            let isPrime = true
            for (let j = 2; j < arr[i]; j++){ 
                // console.log(j)
                // console.log(arr[i])
                if(arr[i] % j == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                console.log(arr[i])
            }
        }
        else{
            console.log('The number is not a prime number')
        }
    }
}

printPrimeNumber([1,2,3,4,5,6,7,8,9]);



//Return all palindromes in an array
const printPalindrome = function(arr){
    
    for (let i = 0; i < arr.length; i++){ 
        var str = arr[i]
        const len = str.length
        var isPalindrome = true;
        for(let j=0; j<len/2;j++){
            if(str[j] != str[len-1-j]){
                isPalindrome = false;
            }
        }
        if(isPalindrome){
            console.log(str)
        }
        
    }
}

printPalindrome(['Hi','aya','malayalam','tamil'])

//Return median of two sorted arrays of the same size
function findMedianSortedArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        // If the merged array has an even length, calculate the average of the middle two elements
        const midIndex1 = length / 2 - 1;
        const midIndex2 = length / 2;
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
        // If the merged array has an odd length, return the middle element
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
    }
}


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = findMedianSortedArrays(arr1, arr2);
console.log(median); // Output: 3.5



//Remove duplicates from an array

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 4, 6];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5, 6]


//Rotate an array by k times
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Ensure k is within the range of array length

    const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));

    return rotatedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const k = 2;

const rotatedArray = rotateArray(originalArray, k);
console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]






//Do the below programs in arrow functions.

//Print odd numbers in an array

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Print odd numbers in an array using arrow function
const printOddNumbers = (arr) => {
    arr.forEach((number) => {
        if (number % 2 !== 0) {
            console.log(number);
        }
    });
};

printOddNumbers(numbers1);

// 2. Convert all the strings to title caps in a string array using arrow function
const stringArray = ["hello world", "javascript is awesome", "title case"];

const titleCaseArray = stringArray.map((str) => {
    return str.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
});

console.log(titleCaseArray);

// 3. Sum of all numbers in an array using arrow function


const numbers2 = [1, 2, 3, 4, 5];


const calculateSum = (arr) => {
  let sum = 0;

  // Loop through each element and add to the sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

// Calculate and print the sum
const result = calculateSum(numbers2);
console.log(result);


const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using arrow function
const findPrimeNumbers = (arr) => {
    const isPrime = (num) => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    return arr.filter((num) => isPrime(num));
};

// Find and print the prime numbers
const primeNumbers = findPrimeNumbers(numbers3);
console.log(primeNumbers);




const array = ['hello', 'madam', 'level', 'javascript', 'radar'];

// Function to check if a string is a palindrome
const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

// Function to return all palindromes in an array
const findPalindromes = (arr) => {
    return arr.filter((str) => isPalindrome(str));
};

// Find and print the palindromes
const palindromes = findPalindromes(array);
console.log(palindromes);
