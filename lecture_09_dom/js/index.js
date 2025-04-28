'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  }
];

// const phoneDigits = [8, 6, 7, 5, 3, 0, 9]

// const largestDigit = phoneDigits.reduce(function(prev, curr){
//   if (prev > curr){
//     return prev
//   } else {
//     return curr
//   }
// })

// console.log("largest digit", largestDigit)

const newParagraph = document.createElement('p');
newParagraph.textContent = "this is content from my index.js"

const mainElem = document.querySelector('main')
mainElem.appendChild(newParagraph)
