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

function renderSongs() {
  const olElem = document.createElement('ol');
  for(const song of songArray){
    const theLi = createSongListItem(song);
    olElem.appendChild(theLi);
  }
  
  const dataSectionElem = document.querySelector('#dataSection');
  
  let dataNodes = document.querySelectorAll("#dataSection ol")

  if(dataNodes.length > 1){
    dataNodes[1].remove()
  }
  
  dataSectionElem.appendChild(olElem);
}

renderSongs()

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

// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//   button.addEventListener('click', function(event){
//     event.preventDefault()
//     console.log("button was clicked, here is the target", event.target, event)
//   })
// })

const imageArray = [
  "img/cookie.png",
  "img/happy.png",
  "img/husky.jpg",
  "img/puppy.jpg",
  "img/surprised.png",
]

titleArray: [

]
// strategies:
// 1. map/transform the imageArray 
// to create a title object, based on the picture 
// naming conventions
// 2. use existing loop/index to split the image string and create a title
// 3. update image array to be an array of objects, with image source AND title
// 4. two different arrays, one for images, one for titles

let index = 0;

const switchButton = document.querySelector('button');
switchButton.addEventListener('click', function(event){
  console.log("click", event.target)
  let image = document.querySelector("#puppySection img")
  //image.src = "img/cookie.png"
  index = index%5;
  image.src = imageArray[index];
  index++;
})

const formButton = document.querySelector('#formSection form');
formButton.addEventListener('submit', function(event){
  event.preventDefault()
  console.log("submit button clicked", event.target)
  const artistVal = document.querySelector('#artistInput').value;
  const titleVal = document.querySelector('#titleInput').value;
  const youtubeVal = document.querySelector('#urlInput').value;
  const newSongObj = {
    artist: artistVal,
    title: titleVal,
    youtubeUrl: youtubeVal
  }
  songArray.push(newSongObj)
  renderSongs()
})


