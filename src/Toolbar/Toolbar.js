import React from "react"

export default function Toolbar(props){
    return(
        <div className = 'toolbarWrapper' data-testid ='ToolBarWrapper'>
            <button className = 'toolbarButton'>Save</button>
            <div className = 'searchArea'>
                <input className = 'toolbarText' placeholder = 'Search By TierList ID'></input>
                <button className = 'toolbarButton'>Search</button>
            </div>
        </div>
    );
}