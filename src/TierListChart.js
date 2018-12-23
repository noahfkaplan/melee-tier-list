import React from "react"
import CharacterCard from "./CharacterCard/CharacterCard"

export default class TierListChart extends React.Component{
    constructor(props){
        super(props);
        this.allCharacters = this.props.characterList;
    }
    addCharacters(characterList){
        this.allCharacters = characterList;
        let charactersByRow = [[],[],[],[],[],[]];
        for(let i = 0; i < this.allCharacters.length; i++){
            charactersByRow[this.allCharacters[i][1]].push(
                <CharacterCard 
                    className = "characterIcon" 
                    key = {this.allCharacters[i][0]}
                    name = {this.allCharacters[i][0]}></CharacterCard>);
        }
        return charactersByRow;
    }
    onDragOver = (ev) =>{
        ev.preventDefault();
    }
    render(){
        let charactersByRow = this.addCharacters(this.props.characterList);
        return(
            <div className = "tierListTable">
                <div className = "tierListRow" onDrop = {(e)=>this.props.onDrop(e,1)} onDragOver ={(e)=>this.onDragOver(e)}>{charactersByRow[0]}</div>
                <div className = "tierListRow" onDrop = {(e)=>this.props.onDrop(e,2)} onDragOver ={(e)=>this.onDragOver(e)}>{charactersByRow[1]}</div>
                <div className = "tierListRow" onDrop = {(e)=>this.props.onDrop(e,3)} onDragOver ={(e)=>this.onDragOver(e)}>{charactersByRow[2]}</div>     
                <div className = "tierListRow" onDrop = {(e)=>this.props.onDrop(e,4)} onDragOver ={(e)=>this.onDragOver(e)}>{charactersByRow[3]}</div>
                <div className = "tierListRow" onDrop = {(e)=>this.props.onDrop(e,5)} onDragOver ={(e)=>this.onDragOver(e)}>{charactersByRow[4]}</div>
                <div className = "tierListRow" onDrop = {(e)=>this.props.onDrop(e,6)} onDragOver ={(e)=>this.onDragOver(e)}>{charactersByRow[5]}</div>
            </div>
        );
    }
}