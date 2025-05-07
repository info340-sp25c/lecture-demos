import { useState } from "react"

export function ChatPane(props){
    const [count, setCount] = useState(0) 
    const handleClick = (event) => {
        console.log("look, I clicked on ", event.target)
        setCount(count + 1)
    }
    return <button onClick={handleClick}>Click Me! (clicked {count} times)</button>
}