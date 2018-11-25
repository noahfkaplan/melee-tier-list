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
            message: ""
        };
    };

    moveCharacters(currentCharacter){
        let inSelectionGrid = this.state.inSelectionGrid;
        let inTierListGrid = this.state.inTierListGrid;
        let message = this.state.message;
        
        let index = inSelectionGrid.indexOf(currentCharacter);
        if(index > -1){
            inSelectionGrid.slice(index,1);
            message = message + "1." + inSelectionGrid;
        }
        index = inTierListGrid[[currentCharacter, this.state.currentTierGridRow-1]];
        if(index > -1){
            inTierListGrid.slice(index,1);
            message = message + "2." + {inTierListGrid};
            
        }
        if(this.state.currentTierGridRow === 0){
            inSelectionGrid.push(currentCharacter);
        }
        else{
            inTierListGrid.push([currentCharacter,this.state.currentTierGridRow-1]);
        }
        this.setState({
            inSelectionGrid: inSelectionGrid,
            inTierListGrid: inTierListGrid,
            message: message
        });
    }
    onMouseOver(tierGridRow){
        this.setState({
            currentTierGridRow: tierGridRow
        });
    }
    handleClick(name){
        this.moveCharacters(name);
    }

    render(){
        return(
            <div className = "mainGridWrapper">
                <div className = "rightSideMenu">Right Side Menu char:{this.state.currentCharacter} row:{this.state.currentTierGridRow} message: {this.state.message}</div>
                <div className = "contentBody">
                    <TierListChart 
                        characterList = {this.state.inTierListGrid} 
                        onMouseOver = {(i) => this.onMouseOver(i)} 
                        onClick = {(i) => this.handleClick(i)}/>
                    <CharacterSelectionGrid 
                        characterList = {this.state.inSelectionGrid}
                        onClick = {(i) => this.handleClick(i)}
                        /*onMouseOver = {() => this.onMouseOver(0)}*//>
                </div>
            </div>
        );
    }
}