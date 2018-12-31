import React from "react"
import CharacterCard from "../CharacterCard/CharacterCard"
import TierListRow from "../TierListRow/TierListRow"

export default class TierListChart extends React.Component{
    constructor(props){
        super(props);
        this.allCharacters = this.props.characterList;
        this.rowCount = 6;
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
                    name = {this.allCharacters[i][0]}></CharacterCard>);
        }
        return charactersByRow;
    }
    createRows(charactersByRow){
        let rows = [];
        for(let i = 0; i < this.rowCount; i++){
            rows.push(<TierListRow key = {i} onDrop = {(e)=>this.props.onDrop(e,i+1)} characters = {charactersByRow[i]}/>);
        }
        return rows;
    }
    render(){
        let charactersByRow = this.addCharacters(this.props.characterList);
        let rows = this.createRows(charactersByRow);
        return(
            <div className = "tierListTable">
                {rows}
            </div>
        );
    }
}