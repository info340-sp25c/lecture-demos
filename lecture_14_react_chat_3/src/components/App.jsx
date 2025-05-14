import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';
import INITIAL_CHAT_LOG from '../data/chat_log.json'


function App(props) {

  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"]
  // const currentChannel = "general";
  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG);
  const [currentChannel, setCurrentChannel] = useState("general")

  const addDataToArray = (text) => {
    // create mock data messageItem
    const messageItem = {
      "channel": currentChannel,
      "text": text,
      "timestamp": Date.now(),
      "userId": "penguin", //TODO: hook up to auth later
      "userName": "Penguin",
      "userImg": "/img/Penguin.png"
    }
    // create new msgStateArray
    const newMsgStateArr = [...msgStateArray, messageItem]

    // set new msgStateArray
    setMsgStateArray(newMsgStateArr)
  }

  const handleChannelClick = (event) => {
    event.preventDefault();
    console.log("clicked on channel", event.target, event.target.innerText)
    // todo: actually set channel
    setCurrentChannel(event.target.innerText)
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channelNames={channelNames} currentChannel={currentChannel} clicky={handleChannelClick} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane
            currentChannel={currentChannel}
            msgStateArray={msgStateArray}
            addDataToArray={addDataToArray}
          />
        </div>
      </div>
    </div>
  );
}

export default App;