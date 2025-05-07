const handleClick = (event) => {
    console.log("look, I clicked on ", event.target)
}

export function ChatPane(props){
    return <button onClick={handleClick}>Click Me!</button>
}