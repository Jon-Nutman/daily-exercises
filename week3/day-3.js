let albums = [
  {
    albumName: "Thriller",
    artist: "Michael Jackson",
    release: { month: 11, day: 30, year: 1982 },
    albumLength: "42:19",
    genre: ["Pop", "Disco", "Funk"],
    tracks: [
      { title: "Wanna Be Startin' Somethin'" },
      { title: "Baby Be Mine" },
      { title: "The Girl Is Mine" },
      { title: "Thriller" },
      { title: "Beat It" },
      { title: "Billie Jean" },
      { title: "Human Nature" },
      { title: "P.Y.T. (Pretty Young Thing)" },
      { title: "The Lady In My Life" },
    ],
  },
];

// Q1
// access the name of the album "Thriller" and assign to "q1"
let q1 = albums[0].albumName

// console.log(albums[0].albumName)

// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q1 == "Thriller");

// Q2
// assign "q2" to the number of titles in the album
let q2 = albums[0].tracks.length

// console.log(albums[0].tracks.length)

// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q2 == 9);

// Q1
// assign q3 to be the year the album was released
let q3 = albums[0].release['year']

// console.log(albums[0].release['year'])

// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q3 == 1982);

// Q4
// assign q4 to be the release date of the album formatted as mm/dd/yyyy
// 'month/' + 'day/' + 'year'
let month = albums[0].release.month
let day = albums[0].release.day
let year = albums[0].release.year

let q4 = month + '/' + day + '/' + year

// console.log(month + '/') 

// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q4 == "11/30/1982");
