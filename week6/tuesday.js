// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// have a function that takes an array and returns a count of how many times true appears
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Return 0 if given an empty array.
function countTrue(arr) {
    let count = 0
    for (let i = 0; i <= arr.length; i++){
        if(arr[i] == true){
            count = count + 1
        }else{
          count
        }
    } return count
}

console.assert(countTrue([]) === 0)
console.assert(countTrue([true]) === 1)
console.assert(countTrue([true, false]) === 1)
console.assert(countTrue([true, false, true]) === 2)
https://edabit.com/challenge/erFxBbqzZPSegMwnc
// Given a total due and an array representing the amount of change in your pocket,
// determine whether or not you are able to pay for the item. Change will always be
// represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// changeEnough([10, 0, 0, 50], 3.85) ➞ false
// changeEnough([1, 0, 5, 219], 19.99) ➞ false

function changeEnough(change, amountDue) {
	if( ((change[0] *= 0.25) + (change[1] *= 0.10) + (change[2] *= 0.5) + (change[3] *= 0.01)) >= amountDue){
      return true
    }else{
      return false
    }
  }

console.assert(changeEnough([2, 100, 0, 0], 14.11) === false)
console.assert(changeEnough([0, 0, 20, 5], 0.75) === true)
// https://edabit.com/challenge/AtoWYYC9THAH5HbS2
// make a calculator that takes in numbers and operator and produces the needed result
// calculator(2, "+", 2) ➞ 4
// calculator(2, "*", 2) ➞ 4
// calculator(4, "/", 2) ➞ 2

function calculator(num1, op, num2){
    if (op == '+'){
       return ans = (num1 + num2) 
    }else if(op == '*'){
       return ans = (num1 * num2)
    }else if(op == '/'){
      return ans =  (num1/num2)
    } else {
        ans = (num1 - num2)
    }
return ans
}


console.assert(calculator(2, "+", 2) === 4)
console.assert(calculator(2, "*", 2) === 4)
console.assert(calculator(4, "/", 2) === 2)
// hard mode
https://edabit.com/challenge/4aaBNPnFMc3bzR7JR
// objectToArray({
//     D: 1,
//     B: 2,
//     C: 3
//   }) ➞ [["D", 1], ["B", 2], ["C", 3]]
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
//   }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
function objectToArray(obj) {
        return Object.entries(obj)
}
const arr = objectToArray({A: '1', B: '2'})
console.assert(arr[0][0] === 'A')
console.assert(arr[0][1] === '1')
console.assert(arr[1][0] === 'B')
console.assert(arr[1][1] === '2')
/// nightmare mode
// https://edabit.com/challenge/Ra85gzkCTtXrNyCag
// Write a function that returns an anonymous function,
// which transforms its input by adding a particular suffix at the end.
// const addLy = addSuffix("ly")
// addLy("hopeless") ➞ "hopelessly"
// addLy("total") ➞ "totally"
// we have not covered this before...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// take a look at "makeAdder" for a hint...