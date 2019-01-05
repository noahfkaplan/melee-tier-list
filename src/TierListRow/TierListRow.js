import React from "react"

export default function TierListRow(props){
    return(
        <div className = "tierListRow" onDrop = {(e)=>props.onDrop(e)} onDragOver = {(e)=>e.preventDefault()}>{props.characters}</div>
    );
}