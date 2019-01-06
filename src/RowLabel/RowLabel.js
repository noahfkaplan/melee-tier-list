import React from "react"

export default function RowLabel(props){
    return(
        <div className = "rowLabelWrapper">
            <button className = "expandButton">+</button>
            <textarea className = "rowLabelText" placeholder = {props.placeholder}></textarea>
        </div>
    );
}