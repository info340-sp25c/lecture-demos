import React from 'react';
import { Link, useParams } from 'react-router-dom';

export function ChannelList(props) {
  const { channelNames } = props;
  const urlParamsObj = useParams();
  console.log('channel list', urlParamsObj)
  const currentChannel = urlParamsObj.whichchannel;

  //render the links
  const liArray = channelNames.map((channelNameString) => {
    return (
      <div key={channelNameString}>
        <Link className="px-2"
          name={currentChannel}
          to={"/chat/" + channelNameString}
        >
          {channelNameString}
        </Link>
      </div>
    );
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      {liArray}
    </nav>
  )
}