import React from "react"
import CharacterSelectionGrid from "../CharacterSelectionGrid/CharacterSelectionGrid"
import TierListChart from "../TierListChart/TierListChart"

export default class WindowGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inSelectionGrid : this.props.characterList.map((name)=>[name,false]),
            inTierListGrid : [],
            hoveredCharacter: null,
            draggedCharacter: null,
            currentRow: -1,
        };
    };
    moveCharacters(currentCharacter,currentRow, transparent){
        console.log("moving characters");
        let newInSelectionGrid = this.state.inSelectionGrid.slice();
        let newInTierListGrid = this.state.inTierListGrid.slice();
        let hoveredCharacter = this.state.hoveredCharacter;
        if(currentCharacter === hoveredCharacter){
            if(currentRow === -1){
                let index = newInSelectionGrid.findIndex((character) => hoveredCharacter === character[0]);
                newInSelectionGrid.splice(index,1,[currentCharacter,transparent]);
            }
            else{
                let index = newInTierListGrid.findIndex((character) => character[0] === hoveredCharacter);
                newInTierListGrid.splice(index,1,[currentCharacter,currentRow,transparent]);
            }
        }      
        else{
            newInSelectionGrid = newInSelectionGrid.filter( character => character[0] !== currentCharacter);
            newInTierListGrid = newInTierListGrid.filter( pair => pair[0] !== currentCharacter);
            if(currentRow === -1){
                if(hoveredCharacter === null){
                    newInSelectionGrid.push([currentCharacter,transparent]);
                }
                else{
                    let index = newInSelectionGrid.findIndex((character) => hoveredCharacter === character[0]);
                    newInSelectionGrid.splice(index,0,[currentCharacter,transparent]);
                }
            }
            else{
                if(hoveredCharacter === null){
                    newInTierListGrid.push([currentCharacter,currentRow,transparent]);
                }
                else{
                    let index = newInTierListGrid.findIndex((character) => character[0] === hoveredCharacter);
                    newInTierListGrid.splice(index,0,[currentCharacter,currentRow,transparent]);
                }
            }
        }
        this.setState({
            inSelectionGrid: newInSelectionGrid,
            inTierListGrid: newInTierListGrid,
        });
    }
    onDragStart(name){
        this.setState({draggedCharacter: name, hoveredCharacter: null});
    }
    onDrop(row){
        let draggedCharacter = this.state.draggedCharacter;
        this.moveCharacters(draggedCharacter,row,false);
        this.setState({draggedCharacter: null, hoveredCharacter: null,currentRow: -1});
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
        let newInSelectionGrid = this.state.inSelectionGrid;
        let newInTierListGrid = this.state.inTierListGrid;
        //return icons from reset row to the selection grid
        let returnedIcons = newInTierListGrid.filter((pair) => pair[1] === rowNumber);
        returnedIcons = returnedIcons.map((pair) => [pair[0],false]);
        newInSelectionGrid.push(...returnedIcons);
        //filter out items from tierlistgrid that are in the reset row
        newInTierListGrid = newInTierListGrid.filter((pair) => pair[1] !== rowNumber);
        return({newInSelectionGrid,newInTierListGrid});
    }
    deleteRow(rowNumber){
        let {newInSelectionGrid,newInTierListGrid} = this.clearRowIcons(rowNumber);
        //decrement all row numbers larger than the deleted row
        newInTierListGrid = newInTierListGrid.map((pair) => pair[1]>rowNumber?[pair[0],pair[1]-1,false]:[pair[0],pair[1]],false);
        this.setState({
            inTierListGrid : newInTierListGrid,
            inSelectionGrid : newInSelectionGrid,
        });
    }
    resetRow(rowNumber){
        let {newInSelectionGrid,newInTierListGrid} = this.clearRowIcons(rowNumber);
        this.setState({
            inTierListGrid : newInTierListGrid,
            inSelectionGrid : newInSelectionGrid,
        });
    }
    insertRow(rowNumber){
        let newInTierListGrid = this.state.inTierListGrid;
        //shift all icons for the rows below the current row down 1
        newInTierListGrid = newInTierListGrid.map((pair) => pair[1]>=rowNumber?[pair[0],pair[1]+1]:[pair[0],pair[1]]);
        this.setState({
            inTierListGrid : newInTierListGrid,
        })
    }
    render(){
        return(
            <div className = "contentBody">
                <TierListChart 
                    characterList = {this.state.inTierListGrid} 
                    onDragStart = {(name) => this.onDragStart(name)}
                    onDrop = {(row) => this.onDrop(row)}
                    onDragOverIcon = {(e,character,row) =>this.onDragOverIcon(e,character,row)}
                    onDragOverRow = {(row) => this.onDragOverRow(row)}
                    onDragLeaveIcon = {(e)=>this.onDragLeaveIcon(e)}
                    resetRow = {(row)=>this.resetRow(row)}
                    deleteRow = {(row)=>this.deleteRow(row)}
                    insertRow = {(row)=>this.insertRow(row)}/>
                <CharacterSelectionGrid 
                    characterList = {this.state.inSelectionGrid}
                    onDragStart = {(name) => this.onDragStart(name)}
                    onDrop = {(row) => this.onDrop(row)}
                    onDragOverIcon = {(e,character,row) =>this.onDragOverIcon(e,character,row)}
                    onDragLeaveIcon = {(e)=>this.onDragLeaveIcon(e)}/>
            </div>
        );
    }
}