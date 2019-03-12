import React from "react"

export default function Toolbar(props){
    return(
        <div className = 'toolbarWrapper'>
            <button className = 'toolbarButton'>Save</button>
            <div className = 'searchArea'>
                <input className = 'toolbarText'></input>
                <button className = 'toolbarButton'>Search</button>
            </div>
        </div>
    );
}