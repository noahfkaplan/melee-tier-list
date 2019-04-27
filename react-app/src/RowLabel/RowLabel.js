import React from "react"

export default function RowLabel(props){
    return(
        <div className = "rowLabelWrapper">
            <button className = "expandButton" data-testid = "expand-button" onClick ={(event)=>props.onClick(event)}>...</button>
            <textarea 
                className = "rowLabelText" 
                spellCheck = "false" 
                placeholder = {props.placeholder} 
                value = {props.text} 
                onChange = {(event)=>props.onChange(event.target.value)}>
            </textarea>
        </div>
    );
}