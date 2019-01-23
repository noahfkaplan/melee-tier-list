import React from "react"
import CharacterSelectionGrid from "../CharacterSelectionGrid/CharacterSelectionGrid"
import TierListChart from "../TierListChart/TierListChart"

export default class WindowGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inSelectionGrid : this.props.characterList,
            inTierListGrid : [],
            hoveredCharacter: null,
            stillHoveredOverCharacter: false,
        };
    };
    moveCharacters(currentCharacter,currentRow){        
        if(currentCharacter !== this.state.hoveredCharacter){
            let newInSelectionGrid = this.state.inSelectionGrid.slice();
            let newInTierListGrid = this.state.inTierListGrid.slice();

            newInSelectionGrid = this.state.inSelectionGrid.filter( character => character !== currentCharacter);
            newInTierListGrid = this.state.inTierListGrid.filter( pair => pair[0] !== currentCharacter);
            if(currentRow === -1){
                if(this.state.hoveredCharacter === null){
                    newInSelectionGrid.push(currentCharacter);
                }
                else{
                    let index = newInSelectionGrid.findIndex((character) => this.state.hoveredCharacter === character);
                    newInSelectionGrid.splice(index,0,currentCharacter);
                }
            }
            else{
                if(this.state.hoveredCharacter === null){
                    newInTierListGrid.push([currentCharacter,currentRow]);
                }
                else{
                    let index = newInTierListGrid.findIndex(([character,row]) => character === this.state.hoveredCharacter);
                    newInTierListGrid.splice(index,0,[currentCharacter,currentRow]);
                }
            }
            this.setState({
                inSelectionGrid: newInSelectionGrid,
                inTierListGrid: newInTierListGrid,
            });
        }
    }

    onDrop(ev, row){
        let name = ev.dataTransfer.getData("name");
        this.moveCharacters(name,row);
    }
    onDragOverIcon(ev, hoveredCharacter){
        ev.preventDefault();
        this.setState({
            hoveredCharacter: hoveredCharacter,
        })
    }
    onDragLeaveIcon(ev){
        ev.preventDefault();
        this.setState({
            hoveredCharacter: null,
        })
    }
    clearRowIcons(rowNumber){
        let newInSelectionGrid = this.state.inSelectionGrid;
        let newInTierListGrid = this.state.inTierListGrid;
        //return icons from reset row to the selection grid
        let returnedIcons = newInTierListGrid.filter((pair) => pair[1] === rowNumber);
        returnedIcons = returnedIcons.map((pair) => pair[0]);
        newInSelectionGrid.push(...returnedIcons);
        //filter out items from tierlistgrid that are in the reset row
        newInTierListGrid = newInTierListGrid.filter((pair) => pair[1] !== rowNumber);
        return({newInSelectionGrid,newInTierListGrid});
    }
    deleteRow(rowNumber){
        let {newInSelectionGrid,newInTierListGrid} = this.clearRowIcons(rowNumber);
        //decrement all row numbers larger than the deleted row
        newInTierListGrid = newInTierListGrid.map((pair) => pair[1]>rowNumber?[pair[0],pair[1]-1]:[pair[0],pair[1]]);
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
            <div className = "mainGridWrapper">
                <div className = "rightSideMenu"></div>
                <div className = "contentBody">
                    <TierListChart 
                        characterList = {this.state.inTierListGrid} 
                        onDrop = {(ev,row) => this.onDrop(ev,row)}
                        onDragOverIcon = {(e,character) =>this.onDragOverIcon(e,character)}
                        onDragLeaveIcon = {(e)=>this.onDragLeaveIcon(e)}
                        resetRow = {(row)=>this.resetRow(row)}
                        deleteRow = {(row)=>this.deleteRow(row)}
                        insertRow = {(row)=>this.insertRow(row)}/>
                    <CharacterSelectionGrid 
                        characterList = {this.state.inSelectionGrid}
                        onDrop = {(ev,row) => this.onDrop(ev,row)}
                        onDragOverIcon = {(e,character) =>this.onDragOverIcon(e,character)}
                        onDragLeaveIcon = {(e)=>this.onDragLeaveIcon(e)}/>
                </div>
            </div>
        );
    }
}