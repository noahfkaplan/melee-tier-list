import React from "react"

export default class ContextMenu extends React.Component{
    constructor(props){
        super(props);
        this.menuOptions = props.menuOptions;
        this.menuOptionButtons = [];
    }

    addMenuOptions(){
        this.menuOptionButtons = this.menuOptions.map((option) => 
            <div key = {option}>
                <button className = "contextMenuOption">{option}</button>
            </div>); 
    }

    render(){
        this.addMenuOptions();
        return(
            <div className = "contextMenu">
                {this.menuOptionButtons}
            </div>
        );
    }
}