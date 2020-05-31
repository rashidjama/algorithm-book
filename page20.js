// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
function countDown(num) {
  let newArr = [];
  for(let i=num; i>=0; i--) {
    newArr.push(i)
  }
  return `new array is [${newArr}] and this array length is ${newArr.length}`
}
// console.log(countDown(5))

//  Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function  printReturn(arr) {
  console.log(arr[0]);
  return arr[1]
}
// console.log(printReturn([1,2]))

//  First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
function firstPlusLength(arr) {
  return arr[0] + arr.length;
}
// console.log(firstPlusLength([1,2,3,4,5]))

//  Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value.Return how many values this is.
function greaterThanSecond(arr) {
  let count =0;
  for(let i=0;i<arr.length;i++) {
    if(arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  return count ;
}

// console.log(greaterThanSecond([1,3,5,7,9,13]))


// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2 nd value. Print how many values this is. What will you do if the array is only one element long?
function generalized(arr) {
  let newArr = [];
  let counter = 0;
  for(let i=0; i<arr.length;i++) {
    if(arr[i] > arr[1]) {
      newArr.push(arr[i]);
      counter++;
    } 
  }
  if(arr.length <= 1) {
    return "Array is short"
  }
  console.log(counter);
  return newArr;
}
// console.log(generalized([5,54,55,777]));

//  This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.


lengthValue(4, 5)

//  Fit the First Value

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
function bigSmallright(arr) {
  for(let i=0;i<arr.length;i++) {
    if(arr[0] > arr.length) {
      console.log("Too big!");
    } else if(arr[0] < arr.length) {
      console.log("Too small!")
    } else {
      console.log("Just right!")
    }
  }
}
// bigSmallright([3,2,3]);

//  Fahrenheit to Celsius

// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function fahrenheitToCelsius(fh) {
return Math.round((fh - 32) / 1.8)
}
// console.log(fahrenheitToCelsius(57));

//  Celsius to Fahrenheit

// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
function celsiusToFahrenheit(cdgrees) {
  return Math.round((cdgrees * 1.8) + 32)
}
// console.log(celsiusToFahrenheit(14))

// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.