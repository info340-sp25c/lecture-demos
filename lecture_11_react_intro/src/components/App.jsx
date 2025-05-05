import { HeaderElement } from "./Header"
import { FooterElement } from "./Footer"

const myName = "Kristen Thayer"
const myNumArray = [1, 2, 3, 4, 5]
const myObj = { name: "Kristen", job: "instructor"}
function myFunc(name){
    console.log("hi, my name is ", name)
}

export function App (props) {
    console.log('props', props)
    return  (
        <>
            <HeaderElement myFunc={myFunc} myObj={myObj} myName={myName} myNumArr={myNumArray} myProp1="May is a cool month" myProp2="Cats!" />
            <FooterElement myName={myName} />
        </>
    )
}