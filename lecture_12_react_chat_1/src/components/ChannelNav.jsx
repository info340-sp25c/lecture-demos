export function ChannelNav(props){
  //  console.log(props)
    const channelArray = props.myChannels ? props.myChannels : []

    const channelListItemArray = channelArray.map((channel) => {
        return (
            <li key={channel}>{channel}</li>
        )
    })
   // console.log(channelListItemArray)
    return (
        <ul>
            {channelListItemArray}
        </ul>
    )
}