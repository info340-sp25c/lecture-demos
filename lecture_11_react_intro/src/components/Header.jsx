// const myName = "Kristen"
const leapYear = (365 + 1) * 24 * 60 
const myImg = '/img/puppy.jpg'

function NumberList(props){
    console.log('number', props)
    const numComponents = props.numbers.map((num) => {
        const elem = <div>My Number is {num}</div>
        return elem;
    })
    return numComponents;
}

export function HeaderElement(props){
    props.myFunc(props.myName)
    const arr = props.myNumArr
    console.log("header props", props.myNumArr, props, props.myProp1)
    return (
        <header>
        <NumberList numbers={arr} />
        <h1 id="hello" className="myClass">Hello World! (from {props.myName})</h1>
        <p>A leap year has { leapYear } minutes!</p>
        <p>{props.myProp1}</p>
        <img src={myImg} alt = "a puppy" />
    </header>
    )
}