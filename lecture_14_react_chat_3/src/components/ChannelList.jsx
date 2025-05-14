import React from 'react';

export function ChannelList(props) {
  const { channelNames, currentChannel, clicky, messageCounts } = props;

  const elemArray = channelNames.map((channelNameString) => {
    let classListString = "px-2";
    if (channelNameString === currentChannel) { //on current channel
      classListString += " bg-warning";
    }

    const transformed = (
      <li className={classListString} key={channelNameString} onClick={clicky}>
        <a href={"/" + channelNameString}>{channelNameString} ({messageCounts[channelNameString] || 0})</a>
      </li>
    );

    return transformed;
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      <ul className="px-0">
        {elemArray}
      </ul>
    </nav>
  )
}