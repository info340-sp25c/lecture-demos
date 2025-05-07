import { useState } from "react"
import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props){
    console.log(INITIAL_CHAT_LOG);
    //Init button
    const [count, setCount] = useState(0) 
    const handleClick = (event) => {
        console.log("look, I clicked on ", event.target)
        setCount(count + 1)
    }

    //init chatItemArray
    const chatItemList = INITIAL_CHAT_LOG.map((chatItem)=> {
        const {userId, timestamp, text, userName, userImg} = chatItem
        return(
            <div className="message d-flex mb-3" key={userId + timestamp}>
                <img className="me-2" src={userImg} />
                <p className="user-name">{userName}</p>
                <p>{text}</p>
            </div>
        )
    })

    return (
        <>
         <button onClick={handleClick}>Click Me! (clicked {count} times)</button>
         <div>
            {chatItemList}
         </div>
        </>
    )
}