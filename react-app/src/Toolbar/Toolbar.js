import React from "react"

function Toolbar(props){
    return(
        <div className = 'toolbarWrapper' data-testid ='ToolBarWrapper'>
            <button className = 'toolbarButton' onClick = {props.save}>Save</button>
            <div className = 'searchArea'>
                <input className = 'toolbarText' placeholder = 'Search By TierList ID'></input>
                <button className = 'toolbarButton' onClick = {props.search}>Search</button>
            </div>
        </div>
    );
}
export {Toolbar}