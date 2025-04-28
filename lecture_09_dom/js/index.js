'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  }
];

// create a <li> with an <a> inside pointing to youtube
// function takes a songObject, which should have artist, title, youtubeurl
function createSongListItem(songObject){
 const newLinkElem = document.createElement('a');
 newLinkElem.href = songObject.youtubeUrl;
 newLinkElem.textContent = songObject.artist + " - " + songObject.title;

  const newLiElem = document.createElement('li');
  newLiElem.appendChild(newLinkElem)

  return newLiElem;
}

const olElem = document.createElement('ol');
for(const song of songArray){
  const theLi = createSongListItem(song);
  olElem.appendChild(theLi);
}

const dataSectionElem = document.querySelector('#dataSection');
dataSectionElem.appendChild(olElem);

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

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', function(event){
    event.preventDefault()
    console.log("button was clicked, here is the target", event.target, event)
  })
})


