import React from "react"

export default function TierListRow(props){
    return(
        <div className = "tierListRow" onMouseOver = {() => props.onMouseOver()}>
            {props.icons}
        </div>
    );
}