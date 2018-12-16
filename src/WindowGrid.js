import React from "react"
import CharacterSelectionGrid from "./CharacterSelectionGrid/CharacterSelectionGrid"
import TierListChart from "./TierListChart"

export default class WindowGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTierGridRow : 0,
            inSelectionGrid : ["drmario","mario","luigi","bowser","peach","yoshi","dk","falcon","ganon",
            "falco","fox","ness","iceclimbers","kirby","samus","sheik","link","younglink",
            "pichu","pikachu","jigglypuff","mewtwo","gnw","marth","roy"],
            inTierListGrid : [],
        };
    };

    moveCharacters(currentCharacter){        
        let newInSelectionGrid = this.state.inSelectionGrid;
        let newInTierListGrid = this.state.inTierListGrid;

        newInSelectionGrid = this.state.inSelectionGrid.filter( character => character !== currentCharacter);

        newInTierListGrid = this.state.inTierListGrid.filter( pair => pair[0] !== currentCharacter);
        
        if(this.state.currentTierGridRow === 0){
            newInSelectionGrid.push(currentCharacter);
        }
        else{
            newInTierListGrid.push([currentCharacter,this.state.currentTierGridRow-1]);
        }
        this.setState({
            inSelectionGrid: newInSelectionGrid,
            inTierListGrid: newInTierListGrid,
        });
    }
    onMouseOver(tierGridRow){
        this.setState({
            currentTierGridRow: tierGridRow
        });
    }
    handleStop(name){
        this.moveCharacters(name);
    }

    render(){
        return(
            <div className = "mainGridWrapper">
                <div className = "rightSideMenu">Right Side Menu char:{this.state.currentCharacter} row:{this.state.currentTierGridRow}</div>
                <div className = "contentBody">
                    <TierListChart 
                        characterList = {this.state.inTierListGrid} 
                        onMouseOver = {(i) => this.onMouseOver(i)} 
                        onDragStop = {(i) => this.handleStop(i)}/>
                    <CharacterSelectionGrid 
                        characterList = {this.state.inSelectionGrid}
                        onDragStop = {(i) => this.handleStop(i)}
                        /*onMouseOver = {() => this.onMouseOver(0)}*//>
                </div>
            </div>
        );
    }
}