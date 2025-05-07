import React from 'react';
import { HeaderBar } from './Header';
import { ChannelNav } from './ChannelNav';
import { ChatPane } from './ChatPane';

const myNameFromDB = "Kristen"
const channelListFromDB = [
  "general",
  "random",
  "announcements",
  "memes"
]

function App(props) {
  return (
    <>
        <HeaderBar myName={myNameFromDB} />
        <ChannelNav myChannels={channelListFromDB} />
        <ChatPane />
    </>
  );
}

export default App;