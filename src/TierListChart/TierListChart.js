import React from "react"
import CharacterCard from "../CharacterCard/CharacterCard"
import TierListRow from "../TierListRow/TierListRow"
import ContextMenu from "../ContextMenu/ContextMenu"

export default class TierListChart extends React.Component{
    constructor(props){
        super(props);
        this.allCharacters = this.props.characterList;
        this.defaultPlaceHolderText = ['S','A','B','C','D','F'];
        this.state = {
            menuExpanded:false,
            menu_X:0,
            menu_Y:0,
            rowCount: 6,
        }
    }
    addCharacters(characterList){
        this.allCharacters = characterList;
        let charactersByRow = [];
        for(let i = 0; i < this.state.rowCount; i++){
            charactersByRow.push([]);
        }
        for(let i = 0; i < this.allCharacters.length; i++){
            charactersByRow[this.allCharacters[i][1]].push(
                <CharacterCard 
                    className = "characterIcon" 
                    onDragOver = {(e,character)=>this.props.onDragOver(e,character)}
                    onDragLeave ={(e)=>this.props.onDragLeave(e)}
                    key = {this.allCharacters[i][0]}
                    name = {this.allCharacters[i][0]}>
                </CharacterCard>);
        }
        return charactersByRow;
    }

    createRows(charactersByRow){
        let rows = [];
        for(let i = 0; i < this.state.rowCount; i++){
            rows.push(
                <TierListRow key = {i} 
                    onDrop = {(e)=>this.props.onDrop(e,i+1)} 
                    characters = {charactersByRow[i]} 
                    placeholder = {this.defaultPlaceHolderText[i]}
                    onClick = {(event,rowCount)=>this.onClick(event,i)}/>
            );
        }
        return rows;
    }
    insertRow(row){
        console.log(row);
    }
    deleteRow(row){
        this.props.deleteRow(row);
        this.defaultPlaceHolderText.splice(row,1);
        this.setState({
            rowCount: this.state.rowCount-1,
        })
    }
    renderContextMenu = () => {
        let menu = null;
        if(this.state.menuExpanded){
            menu = 
            <ContextMenu 
                topEdge = {this.state.menu_Y} 
                leftEdge = {this.state.menu_X} 
                menuOptionNames = {["Insert Row", "Delete Row","Reset Row"]}
                menuOptionFunctions ={[()=>this.insertRow(this.state.contextMenuRow),()=>this.deleteRow(this.state.contextMenuRow), ()=>this.props.resetRow(this.state.contextMenuRow)]}>
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
        let charactersByRow = this.addCharacters(this.props.characterList);
        let rows = this.createRows(charactersByRow);
        return(
            <div className = "tierListTable" id = "TierListTable" onClick = {()=> this.state.menuExpanded?this.setState({menuExpanded:false}):false}>
                {rows}
                {this.renderContextMenu()}
            </div>
        );
    }
}