import React from "react"
import TierListRow from "./TierListRow"
import CharacterCard from "./CharacterCard/CharacterCard"

export default class TierListChart extends React.Component{
    constructor(props){
        super(props);
        this.allCharacters = this.props.characterList;
    }
    addCharacters(){
        let charactersByRow = [[],[],[],[],[],[]];
        /*this.allCharacters.map((name, row) => {
            charactersByRow[row].push(
                <div className = "characterIcon" key = {name}>
                    <CharacterCard name = {name} onMouseUp = {() => this.props.onMouseUp(name)}></CharacterCard>
                </div>
            );
        });*/
        for(let i = 0; i < this.allCharacters.length; i++){
            charactersByRow[this.allCharacters[i][1]].push(
                <div className = "characterIcon" key = {this.allCharacters[i][0]}>
                    <CharacterCard name = {this.allCharacters[i][0]} onMouseUp = {() => this.props.onMouseUp(this.allCharacters[i][0])}></CharacterCard>
                </div>
            )
        }
        return charactersByRow;
    }
    render(){
        let charactersByRow = this.addCharacters();
        return(
            <div className = "tierListTable" onMouseLeave = {this.props.onMouseLeave(0)}>
                <TierListRow onMouseLeave = {this.props.onMouseLeave(1)} icons = {charactersByRow[0]}/>
                <TierListRow onMouseLeave = {this.props.onMouseLeave(1)} icons = {charactersByRow[1]}/>
                <TierListRow onMouseLeave = {this.props.onMouseLeave(1)} icons = {charactersByRow[2]}/>
                <TierListRow onMouseLeave = {this.props.onMouseLeave(1)} icons = {charactersByRow[3]}/>
                <TierListRow onMouseLeave = {this.props.onMouseLeave(1)} icons = {charactersByRow[4]}/>
                <TierListRow onMouseLeave = {this.props.onMouseLeave(1)} icons = {charactersByRow[5]}/>
            </div>
        );
    }
}