import React from 'react';
import { HeaderBar } from './Header';
import { ChannelNav } from './ChannelNav';

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
    </>
  );
}

export default App;