// String Manipulation Functions:

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// Array Functions:

// 1. Find Maximum Value in an Array
function findMax(arr) {
    return Math.max(...arr);
}

// 2. Find Minimum Value in an Array
function findMin(arr) {
    return Math.min(...arr);
}

// 3. Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// 4. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}


// Mathematical Functions:

// 1. Factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// 2. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 3. Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}


console.log(reverseString("hello"));             
console.log(countCharacters("hello world"));   
console.log(capitalizeWords("hello world"));     

console.log(findMax([1, 2, 3, 4, 5]));          
console.log(findMin([1, 2, 3, 4, 5]));          
console.log(sumArray([1, 2, 3, 4, 5]));         
console.log(filterArray([1, 2, 3, 4, 5], x => x > 2)); 

console.log(factorial(5));                       
console.log(isPrime(7));                         
console.log(isPrime(10));                        
console.log(fibonacci(6));                       
