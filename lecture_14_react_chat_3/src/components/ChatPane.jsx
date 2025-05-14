import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.jsx';



export function ChatPane(props) {
  console.log('props', props)
  const { msgStateArray, addDataToArray } = props
  console.log("rendering the ChatPane")
  const [count, setCount] = useState(0);

  const { currentChannel } = props;
  // console.log('current channel', currentChannel)

  //data: an array of message objects [{}, {}]
  const messageObjArray = msgStateArray
    .sort((m1, m2) => m1.timestamp - m2.timestamp) //chron order
    .filter((msgObj) => msgObj.channel == currentChannel)

  console.log('messages', messageObjArray)


  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = messageObjArray.map((chatObj) => {
    const elem = <MessageItem key={chatObj.timestamp} messageData={chatObj} />
    return elem; //put it in the new array!
  });

  const handleClick = (event) => {
    // console.log('click!', event, event.target);
    setCount(count + 1)
    addDataToArray("I clicked the green Click me button!")
  }

  return (
    <>
      <div className="scrollable-pane">
        {/* button demo */}
        <div className="pt-2 my-2">
          <button className="btn btn-success" onClick={handleClick}>Click me!</button>
          <p>You clicked me {count} times</p>
        </div>
        <hr />

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm addData={addDataToArray} />
    </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const { userName, userImg, text } = msgObj;

  let buttonColor = "grey";

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} alt={userName + "'s avatar"} />
      </div>
      <div className="flex-grow-1">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
        </button>
      </div>
    </div>
  )
}
