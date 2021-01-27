let book = {
  title: "Inferno",
  author: { firstName: "Dan", lastName: "Brown" },
  release: 2014,
  ISBN13: 9780804172264,
  genre: ["Mystery", "Conspiracy Fiction", "Thriller"],
  details: [{ productDims: { w: 5.2, h: 7.9, d: 1.2 } }],
};

//Q1
//access the full name of the author in the
//object "book" and set it to o1
//format name as "Dan Brown"
let firstDan = book.author.firstName
let lastBrown = book.author.lastName
let o1 = firstDan + ' ' + lastBrown
 
// console.log(firstDan + ' ' + lastBrown)

console.assert(o1 == "Dan Brown");

//Q2
//set o2 to the number of genres the object "book" has
let o2 = book.genre.length

// console.log(book.genre.length)

console.assert(o2 == 3);

//Q3
//use a method that checks if the object "book" has a genre of
//"Mystery" if so, return true

 let o3 = book.genre.includes('Mystery')



// console.log(book.genre.includes('Mystery'))

console.assert(o3 == true);

//Q4
//set o4 to a function that checks if the object "book" is released
//after 2012, if so have it return true
let o4 = (obj) => (obj.release > 2012 ? true : false)


// let o4 = function(){
//   let year = book.release

//   if (year > 2012){
//     return true
//   }
// }


// console.log(book.release > 2012)

console.assert(o4(book) == true);

//Q5 - bonus
//set o5 to a function that returns the number of keys
//found in the object "book"
//hint: for in loop

// let o5 = function(obj){
//   let keyCount = 0
//   for(let key in obj)
// }

console.assert(o5(book) == 6);
