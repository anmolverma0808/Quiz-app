import React from "react"

export default function Option(props){
    
    let bgColor = ""
    if(props.isHeld === 1)
        bgColor = "#4e8ad4"
    else if(props.isHeld === 2)
        bgColor = "#42e352";
    else if(props.isHeld === 3)
        bgColor = "#e36742"
    
    const style = {
        backgroundColor: bgColor
    }
    
    return (
        <li className="option" onClick={props.handleOnClick} style={style}>{props.value}</li>
    )
}