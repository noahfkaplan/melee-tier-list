import React from "react"

export default class ContextMenu extends React.Component{
    constructor(props){
        super(props);
        this.menuOptionNames = props.menuOptionNames;
        this.menuOptionFunctions = props.menuOptionFunctions;
        this.menuOptionButtons = [];
        this.topEdge = props.topEdge;
        this.leftEdge = props.leftEdge;
        this.isVisible = props.isVisible;
    }
    
    addMenuOptions(){
        this.menuOptionButtons = this.menuOptionNames.map((option,index) => 
            <button key = {option} className = "contextMenuOption" onClick = {() => this.menuOptionFunctions[index]()}>{option}</button>
        ); 
    }

    render(){
        this.addMenuOptions();
        return(
            <div className = "contextMenu"style={{left: this.leftEdge, top: this.topEdge, position:'absolute'}}>
                {this.menuOptionButtons}
            </div>
        );
    }
}