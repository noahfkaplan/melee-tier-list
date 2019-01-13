import React from "react"
import CharacterCard from "../CharacterCard/CharacterCard"
import TierListRow from "../TierListRow/TierListRow"
import ContextMenu from "../ContextMenu/ContextMenu"

export default class TierListChart extends React.Component{
    constructor(props){
        super(props);
        this.allCharacters = this.props.characterList;
        this.rowCount = 6;
        this.defaultPlaceHolderText = ['S','A','B','C','D','F'];
        this.state = {
            menuExpanded:false,
            menu_X:0,
            menu_Y:0,
        }
    }
    addCharacters(characterList){
        this.allCharacters = characterList;
        let charactersByRow = [];
        for(let i = 0; i < this.rowCount; i++){
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
        for(let i = 0; i < this.rowCount; i++){
            rows.push(
                <TierListRow key = {i} 
                    onDrop = {(e)=>this.props.onDrop(e,i+1)} 
                    characters = {charactersByRow[i]} 
                    placeholder = {this.defaultPlaceHolderText[i]}
                    onClick = {(event)=>this.onClick(event)}/>
            );
        }
        return rows;
    }
    renderContextMenu = () => {
        let menu = null;
        if(this.state.menuExpanded){
            menu = <ContextMenu topEdge = {this.state.menu_Y} leftEdge = {this.state.menu_Y} menuOptions = {["option1","option2"]}></ContextMenu>
        }
        return menu;
    }
    onClick = (event) =>{
        let nextMenuExpandedState = !this.state.menuExpanded;
        this.setState({
            menuExpanded : nextMenuExpandedState,
            menu_X: event.clientX,
            menu_Y: event.clientY,
        });
        console.log(event.clientX);
        console.log(event.clientY);
    }
    render(){
        let charactersByRow = this.addCharacters(this.props.characterList);
        let rows = this.createRows(charactersByRow);
        return(
            <div className = "tierListTable" id = "TierListTable">
                <div onClick = {()=> this.state.menuExpanded?this.setState({menuExpanded:false}):0}>
                    {rows}
                </div>
                {this.renderContextMenu()}
            </div>
        );
    }
}