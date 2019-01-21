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
    createRows(){
        let rows = [];
        for(let i = 0; i < this.state.rowCount; i++){
            let characters = this.props.characterList.filter((pair) => pair[1] === i);
            characters = characters.map((pair)=>pair[0]);
            rows.push(
                <TierListRow key = {i} 
                    onDrop = {(e)=>this.props.onDrop(e,i)} 
                    characters = {characters}
                    onDragOverIcon = {(e,character)=>this.props.onDragOverIcon(e,character)} 
                    onDragLeaveIcon = {(e)=>this.props.onDragLeaveIcon(e)}
                    placeholder = {this.defaultPlaceHolderText[i]}
                    onChange = {(text,row) => this.onTextChange(text,i)}
                    text = {this.state.labelTexts[i]}
                    onClick = {(event,row)=>this.onClick(event,i)}/>
            );
        }
        return rows;
    }
    insertRowAbove(row){
        this.props.insertRowAbove(row);
        this.defaultPlaceHolderText.splice(row,0,"new");
        let newLabelTexts = this.state.labelTexts;
        newLabelTexts.splice(row,0,"");
        this.setState({
            rowCount: this.state.rowCount+1,
            labelTexts: newLabelTexts,
        })
    }
    insertRowBelow(row){
        this.props.insertRowBelow(row);
        this.defaultPlaceHolderText.splice(row+1,0,"new");
        let newLabelTexts = this.state.labelTexts;
        newLabelTexts.splice(row+1,0,"");
        this.setState({
            rowCount: this.state.rowCount+1,
            labelTexts: newLabelTexts,
        })
    }
    deleteRow(row){
        this.props.deleteRow(row);
        this.defaultPlaceHolderText.splice(row,1);
        let newLabelTexts = this.state.labelTexts;
        newLabelTexts.splice(row,1);

        this.setState({
            rowCount: this.state.rowCount-1,
            labelTexts: newLabelTexts,
        })
    }
    renderContextMenu = () => {
        let menu = null;
        if(this.state.menuExpanded){
            menu = 
            <ContextMenu 
                topEdge = {this.state.menu_Y} 
                leftEdge = {this.state.menu_X} 
                menuOptionNames = {["Insert Row Above","Insert Row Below","Delete Row","Reset Row"]}
                menuOptionFunctions = {[()=>this.insertRowAbove(this.state.contextMenuRow),
                                        ()=>this.insertRowBelow(this.state.contextMenuRow),
                                        ()=>this.deleteRow(this.state.contextMenuRow), 
                                        ()=>this.props.resetRow(this.state.contextMenuRow)]}>
            </ContextMenu>
        }
        return menu;
    }
    onClick = (event,row) =>{
        let nextMenuExpandedState = !this.state.menuExpanded;
        let rect = document.getElementById("TierListTable").getBoundingClientRect();
        this.setState({
            menuExpanded : nextMenuExpandedState,
            menu_X: event.clientX - rect.left,
            menu_Y: event.clientY - rect.top,
            contextMenuRow: row,
        });
    }
    render(){
        return(
            <div className = "tierListTable" id = "TierListTable" onClick = {()=> this.state.menuExpanded?this.setState({menuExpanded:false}):false}>
                {this.createRows()}
                {this.renderContextMenu()}
            </div>
        );
    }
}