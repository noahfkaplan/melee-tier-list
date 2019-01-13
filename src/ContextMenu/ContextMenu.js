import React from "react"

export default class ContextMenu extends React.Component{
    constructor(props){
        super(props);
        this.menuOptions = props.menuOptions;
        this.menuOptionButtons = [];
        this.topEdge = this.props.topEdge;
        this.leftEdge = this.props.leftEdge;
        this.isVisible = this.props.isVisible;
    }

    addMenuOptions(){
        this.menuOptionButtons = this.menuOptions.map((option) => 
            <div key = {option}>
                <button className = "contextMenuOption">{option}</button>
            </div>
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