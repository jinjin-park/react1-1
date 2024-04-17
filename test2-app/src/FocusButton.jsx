import React, {useRef} from "react"

export default function FocusButton (props) {
    const inputElem = useRef(null)

    const onButtonClick = () => {
        inputElem.current.focus()
    }
    return(
        <>
         <input ref={inputElem} type="text" />
         <button onClock={onButtonClick}>Focus the input</button>    
        </>
    )
}