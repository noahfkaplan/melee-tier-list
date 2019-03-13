import React from "react"
import CharacterSelectionGrid from "../CharacterSelectionGrid/CharacterSelectionGrid"
import TierListChart from "../TierListChart/TierListChart"
import Toolbar from "../Toolbar/Toolbar"

export default class WindowGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            characters : this.props.characterList.map((name)=> ({characterName: name, row: -1, transparent: false})),
            hoveredCharacter: null,
            draggedCharacter: null,
            currentRow: -1,
        };
    };
    moveCharacters(currentCharacter,currentRow, transparent){
        if(currentCharacter === null) return;
        let newCharacters = this.state.characters.slice();
        let hoveredCharacter = this.state.hoveredCharacter;
        if(currentCharacter === hoveredCharacter){
            let index = newCharacters.findIndex((icon) => hoveredCharacter === icon.characterName);
            newCharacters.splice(index,1,{characterName: currentCharacter,row: currentRow,transparent:transparent});
        }      
        else{
            newCharacters = newCharacters.filter( icon => currentCharacter !== icon.characterName);
            if(hoveredCharacter === null){
                newCharacters.push({characterName: currentCharacter,row: currentRow,transparent:transparent});
            }
            else{
                let index = newCharacters.findIndex((icon) => hoveredCharacter === icon.characterName);
                newCharacters.splice(index,0,{characterName: currentCharacter,row: currentRow,transparent:transparent});
            }
        }
        this.setState({
            characters: newCharacters,
        });
    }
    onDragStart(name){
        this.setState({draggedCharacter: name, hoveredCharacter: null});
    }
    onDrop(){
        let draggedCharacter = this.state.draggedCharacter;
        let newCharacters = this.state.characters.slice();
        console.log(newCharacters);
        newCharacters.map((character) => character.characterName === draggedCharacter? character.transparent = false: null);
        this.setState({
            characters: newCharacters,
            draggedCharacter: null, 
            hoveredCharacter: null,
            currentRow: -1,
        });
    }
    onDragOverIcon(ev, hoveredCharacter, row){
        let draggedCharacter = this.state.draggedCharacter;
        ev.preventDefault();
        this.setState({
            hoveredCharacter: hoveredCharacter,
        });
        if(draggedCharacter !== hoveredCharacter){
            this.moveCharacters(draggedCharacter,row,true);            
        }
    }
    onDragOverRow(row){
        let draggedCharacter = this.state.draggedCharacter;
        let hoveredCharacter = this.state.hoveredCharacter;
        let currentRow = this.state.currentRow;
        if(hoveredCharacter === null && row !== currentRow){
            this.setState({currentRow: row});
            this.moveCharacters(draggedCharacter, row, true);
        }
    }
    onDragLeaveIcon(ev){
        ev.preventDefault();
        this.setState({
            hoveredCharacter: null,
        });
    }
    clearRowIcons(rowNumber){
        let newCharacters = this.state.characters;
        //return icons from reset row to the selection grid
        let returnedIcons = newCharacters.filter((icons) => icons.row === rowNumber);
        returnedIcons = returnedIcons.map((icons) => ({characterName: icons.characterName,row: -1,transparent:false}));
        newCharacters.push(...returnedIcons);
        //filter out items from tierlistgrid that are in the reset row
        newCharacters = newCharacters.filter((icons) => icons.row !== rowNumber);
        return newCharacters;
    }
    deleteRow(rowNumber){
        let newCharacters = this.clearRowIcons(rowNumber);
        //decrement all row numbers larger than the deleted row
        //newInTierListGrid = newInTierListGrid.map((pair) => pair[1]>rowNumber?[pair[0],pair[1]-1,false]:[pair[0],pair[1]],false);
        newCharacters = newCharacters.map((icons) => icons.row > rowNumber? {characterName:icons.characterName, row:icons.row-1, transparent:false}:{characterName:icons.characterName, row:icons.row, transparent:false});
        this.setState({
            characters : newCharacters,
        });
    }
    resetRow(rowNumber){
        let newCharacters = this.clearRowIcons(rowNumber);
        this.setState({
            characters: newCharacters,
        });
    }
    insertRow(rowNumber){
        let newCharacters = this.state.characters;
        //shift all icons for the rows below the current row down 1 (should have to worry about the selection grid since -1 wont be bigger than the incoming row)
        newCharacters = newCharacters.map((icons) => icons.row >= rowNumber?{characterName:icons.characterName,row:icons.row+1,transparent:false}:{characterName:icons.characterName,row:icons.row,transparent:false})
        this.setState({
            characters: newCharacters,
        })
    }
    render(){
        return(
            <div className = "contentBody">
                <Toolbar/>
                <TierListChart 
                    characterList = {this.state.characters.filter((icons) => icons.row !== -1)} 
                    onDragStart = {(name) => this.onDragStart(name)}
                    onDrop = {() => this.onDrop()}
                    onDragOverIcon = {(e,character,row) =>this.onDragOverIcon(e,character,row)}
                    onDragOverRow = {(row) => this.onDragOverRow(row)}
                    onDragLeaveIcon = {(e)=>this.onDragLeaveIcon(e)}
                    resetRow = {(row)=>this.resetRow(row)}
                    deleteRow = {(row)=>this.deleteRow(row)}
                    insertRow = {(row)=>this.insertRow(row)}/>
                <CharacterSelectionGrid 
                    characterList = {this.state.characters.filter((icons) => icons.row === -1)}
                    onDragStart = {(name) => this.onDragStart(name)}
                    onDrop = {() => this.onDrop()}
                    onDragOverIcon = {(e,character,row) =>this.onDragOverIcon(e,character,row)}
                    onDragLeaveIcon = {(e)=>this.onDragLeaveIcon(e)}/>
            </div>
        );
    }
}