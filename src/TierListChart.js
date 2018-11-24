import React from "react"
import TierListRow from "./TierListRow"
import CharacterCard from "./CharacterCard/CharacterCard"

export default class TierListChart extends React.Component{
    constructor(props){
        super(props);
        this.allCharacters = this.props.characterList;
        this.charactersByRow = this.addCharacters();
    }
    addCharacters(){
        this.charactersByRow = [[],[],[],[],[],[]];
        this.allCharacters.map((name, row) => {
            this.charactersByRow[row].push(
                <div className = "characterIcon" key = {name}>
                    <CharacterCard name = {name} onmouseup = {() => this.props.onmouseup(name)}></CharacterCard>
                </div>
            );
        });
    }
    render(){
        return(
            <div className = "tierListTable" onmouseleave = {this.props.onmouseover(0)}>
                <TierListRow onmouseover = {this.props.onmouseover(1)}></TierListRow>
                <TierListRow onmouseover = {this.props.onmouseover(2)}></TierListRow>
                <TierListRow onmouseover = {this.props.onmouseover(3)}></TierListRow>
                <TierListRow onmouseover = {this.props.onmouseover(4)}></TierListRow>
                <TierListRow onmouseover = {this.props.onmouseover(5)}></TierListRow>
                <TierListRow onmouseover = {this.props.onmouseover(6)}></TierListRow>
            </div>
        );
    }
}