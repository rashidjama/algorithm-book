// To Do 1
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function insertValue(array, value) {
  for (let i=array.length-1; i>=0; i--) {
    array[i+1] = array[i]
  }
  array[0] = value
  return array
}
// console.log(insertValue([3,4,5,6], 10))



// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
  return arr[0]
}
// console.log(popFront([2,4,5,6]))


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function instertAt(arr, idx, value) {
  for (let i=0; i<arr.length; i++) {
    if (i === idx) {
      arr[i] = value
    }
  }
  return arr
}
// console.log(instertAt([4,5,6,7], 2, 0))



// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, value) {
  return arr[value]
}
// console.log(removeAt([1,2,3,4], 1))



// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swipePairs(arr) {
  return [arr[0], arr[1], arr[2], arr[3]] = [arr[1], arr[0], arr[3], arr[2]];
}
// console.log(swipePairs([1,2,3,4]))

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
function removeDuplicates(arr){
  let newArray = []
  for(let i=0; i<arr.length;i++) {
    if(arr[i] !== arr[i+1]) {
      newArray.push(arr[i])
    }
  }
  return newArray
}
console.log(removeDuplicates([1,2,2,3,5,5]))

// Second: Solve this without using any nested loops.