import React from "react"
import TierListRow from "../TierListRow/TierListRow"
import ContextMenu from "../ContextMenu/ContextMenu"

export default class TierListChart extends React.Component{
    constructor(props){
        super(props);
        this.defaultPlaceHolderText = ['S','A','B','C','D','F'];
        this.state = {
            labelTexts: ["","","","","",""],
            menuExpanded:false,
            menu_X:0,
            menu_Y:0,
            rowCount: 6,
        }
    }
    onTextChange(text, row){
        let newText = this.state.labelTexts;
        newText[row] = text;
        this.setState({
            labelTexts: newText,
        });      
    }
    onClick = (event,row) =>{
        let nextMenuExpandedState = !this.state.menuExpanded;
        let rect = document.getElementById("TierListChart").getBoundingClientRect();
        this.setState({
            menuExpanded : nextMenuExpandedState,
            menu_X: event.clientX - rect.left,
            menu_Y: event.clientY - rect.top,
            contextMenuRow: row,
        });
    }
    createRows(){
        let rows = [];
        for(let i = 0; i < this.state.rowCount; i++){
            let characters = this.props.characterList.filter((icons) => i === icons.row);
            rows.push(
                <TierListRow
                    key = {i} 
                    onDrop = {()=>this.props.onDrop(i)} 
                    characters = {characters}
                    onDragStart = {(name) => this.props.onDragStart(name)}
                    onDragOverIcon = {(e,character)=>this.props.onDragOverIcon(e,character,i)} 
                    onDragOverRow = {() => this.props.onDragOverRow(i)}
                    onDragLeaveIcon = {(e)=>this.props.onDragLeaveIcon(e)}
                    placeholder = {this.defaultPlaceHolderText[i]}
                    onChange = {(text,row) => this.onTextChange(text,i)}
                    text = {this.state.labelTexts[i]}
                    onClick = {(event,row)=>this.onClick(event,i)}/>
            );
        }
        return rows;
    }
    insertRow(row){
        if(this.state.rowCount < 10){//set max row count to 10
            this.props.insertRow(row);
            this.defaultPlaceHolderText.splice(row,0,"new");
            let newLabelTexts = this.state.labelTexts;
            newLabelTexts.splice(row,0,"");
            this.setState({
                rowCount: this.state.rowCount+1,
                labelTexts: newLabelTexts,
            });
        }   
    }
    deleteRow(row){
        if(this.state.rowCount > 3){//set min row count to 3
            this.props.deleteRow(row);
            this.defaultPlaceHolderText.splice(row,1);
            let newLabelTexts = this.state.labelTexts;
            newLabelTexts.splice(row,1);

            this.setState({
                rowCount: this.state.rowCount-1,
                labelTexts: newLabelTexts,
            });
        }
    }
    renderContextMenu = () => {
        let menu = null;
        if(this.state.menuExpanded){
            menu = 
            <ContextMenu 
                topEdge = {this.state.menu_Y} 
                leftEdge = {this.state.menu_X} 
                menuOptionNames = {["Insert Row Above","Insert Row Below","Delete Row","Reset Row"]}
                menuOptionFunctions = {[()=>this.insertRow(this.state.contextMenuRow),
                                        ()=>this.insertRow(this.state.contextMenuRow+1),
                                        ()=>this.deleteRow(this.state.contextMenuRow), 
                                        ()=>this.props.resetRow(this.state.contextMenuRow)]}>
            </ContextMenu>
        }
        return menu;
    }
    render(){
        return(
            <div className = "tierListChart" id = "TierListChart" data-testid = "TierListChart" onClick = {()=> this.state.menuExpanded?this.setState({menuExpanded:false}):false}>
                {this.createRows()}
                {this.renderContextMenu()}
            </div>
        );
    }
}