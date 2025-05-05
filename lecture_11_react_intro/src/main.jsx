import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

console.log("jsx file");

      // const msgElem = document.createElement('h1')
      // msgElem.id = "hello";
      // msgElem.classList.add('myClass');
      // msgElem.textContent = 'Hello World!';
      // document.getElementById('root').appendChild(msgElem)

// const msgElem = React.createElement(
//     'h1',
//     { id: "hello", className: "myClass" },
//     "Hello World FROM REACT main.jsx!"
// )
const myName = "Kristen"
const leapYear = (365 + 1) * 24 * 60 
const myImg = '/img/puppy.jpg'
const msgElem = (
    <>
        <header>
            <h1 id="hello" className="myClass">Hello World! (from {myName})</h1>
            <p>A leap year has { leapYear } minutes!</p>
            <img src={myImg} alt = "a puppy" />
        </header>
        <footer>
            This is a footer
        </footer>
    </>
)



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(msgElem)