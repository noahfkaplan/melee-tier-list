import React from "react"

export default class ContextMenu extends React.Component{
    constructor(props){
        super(props);
        this.menuOptionNames = props.menuOptionNames;
        this.menuOptionFunctions = props.menuOptionFunctions;
        this.menuOptionButtons = [];
        this.topEdge = props.topEdge;
        this.leftEdge = props.leftEdge;
        this.state = { highlightedRow: -1};
    }
    addMenuOptions(){
        this.menuOptionButtons = this.menuOptionNames.map((option,index) => 
            <button key = {option} 
                className = {this.state.highlightedRow === index?"highlightedContextMenuOption":"contextMenuOption"}
                data-testid = {this.state.highlightedRow === index?"highlighted":"not-highlighted"}
                onClick = {() => this.menuOptionFunctions[index]()}
                onMouseOver = {() => this.setState({highlightedRow: index})}
                onMouseOut = {() => this.setState({highlightedRow: -1})}>
                {option}
            </button>
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