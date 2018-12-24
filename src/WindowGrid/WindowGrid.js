import React from "react"
import CharacterSelectionGrid from "../CharacterSelectionGrid/CharacterSelectionGrid"
import TierListChart from "../TierListChart/TierListChart"

export default class WindowGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inSelectionGrid : ["drmario","mario","luigi","bowser","peach","yoshi","dk","falcon","ganon",
            "falco","fox","ness","iceclimbers","kirby","samus","sheik","link","younglink",
            "pichu","pikachu","jigglypuff","mewtwo","gnw","marth","roy"],
            inTierListGrid : [],
        };
    };

    moveCharacters(currentCharacter,currentRow){        
        let newInSelectionGrid = this.state.inSelectionGrid;
        let newInTierListGrid = this.state.inTierListGrid;

        newInSelectionGrid = this.state.inSelectionGrid.filter( character => character !== currentCharacter);
        newInTierListGrid = this.state.inTierListGrid.filter( pair => pair[0] !== currentCharacter);
        
        if(currentRow === 7){
            newInSelectionGrid.push(currentCharacter);
        }
        else{
            newInTierListGrid.push([currentCharacter,currentRow-1]);
        }
        this.setState({
            inSelectionGrid: newInSelectionGrid,
            inTierListGrid: newInTierListGrid,
        });
    }
    onDrop(ev, row){
        let name = ev.dataTransfer.getData("name");
        this.moveCharacters(name,row);
    }

    render(){
        return(
            <div className = "mainGridWrapper">
                <div className = "rightSideMenu"></div>
                <div className = "contentBody">
                    <TierListChart 
                        characterList = {this.state.inTierListGrid} 
                        onDrop = {(ev,row) => this.onDrop(ev,row)}/>
                    <CharacterSelectionGrid 
                        characterList = {this.state.inSelectionGrid}
                        onDrop = {(ev,row) => this.onDrop(ev,row)}/>
                </div>
            </div>
        );
    }
}