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
        for(let i = 0; i < this.allCharacters.length; i++){
            charactersByRow[this.allCharacters[i][1]].push(
                <div className = "characterIcon" key = {this.allCharacters[i][0] }>
                    <CharacterCard 
                        name = {this.allCharacters[i][0]} 
                        onClick = {() => this.props.onClick(this.allCharacters[i][0])}></CharacterCard>
                </div>
            )
        }
        return charactersByRow;
    }
    render(){
        let charactersByRow = this.addCharacters();
        return(
            <div className = "tierListTable">
                <TierListRow onMouseOver = {() => this.props.onMouseOver(1)} icons = {charactersByRow[0]}/>
                <TierListRow onMouseOver = {() => this.props.onMouseOver(2)}  icons = {charactersByRow[1]}/>
                <TierListRow onMouseOver = {() => this.props.onMouseOver(3)}  icons = {charactersByRow[2]}/>
                <TierListRow onMouseOver = {() => this.props.onMouseOver(4)}  icons = {charactersByRow[3]}/>
                <TierListRow onMouseOver = {() => this.props.onMouseOver(5)}  icons = {charactersByRow[4]}/>
                <TierListRow onMouseOver = {() => this.props.onMouseOver(6)}  icons = {charactersByRow[5]}/>
            </div>
        );
    }
}