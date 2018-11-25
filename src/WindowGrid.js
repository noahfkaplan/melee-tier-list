import React from "react"
import CharacterSelectionGrid from "./CharacterSelectionGrid/CharacterSelectionGrid"
import TierListChart from "./TierListChart"

export default class WindowGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currectCharacter : null,
            currentTierGridRow : 0,
            inSelectionGrid : ["drmario","mario","luigi","bowser","peach","yoshi","dk","falcon","ganon",
            "falco","fox","ness","iceclimbers","kirby","samus","sheik","link","younglink",
            "pichu","pikachu","jigglypuff","mewtwo","gnw","marth","roy"],
            inTierListGrid : [],
        };
    };

    moveCharacters(){
        let inSelectionGrid = this.state.inSelectionGrid;
        let inTierListGrid = this.state.inTierListGrid;
        let currentCharacter = this.state.currectCharacter;
        
        let index = inSelectionGrid.indexOf(currentCharacter);
        if(index > -1){
            inSelectionGrid.slice(index,1);
        }
        index = inTierListGrid[currentCharacter];
        if(index > -1){
            inTierListGrid.slice(index,1);
        }
        if(this.state.currentTierGridRow === 0){
            inSelectionGrid.push(currentCharacter);
        }
        else{
            inTierListGrid.push([currentCharacter,this.state.currentTierGridRow]);
        }
        this.setState({
            inSelectionGrid: inSelectionGrid,
            inTierListGrid: inTierListGrid,
            currentCharacter: null
        });
    }
    onMouseUp(name){
        /*this.setState({
            currentCharacter: name
        });
        this.moveCharacters();
        */
    }
    onMouseLeave(tierGridRow){
        /*if(tierGridRow === 100000){
            this.setState({
                currentTierGridRow: tierGridRow
            });
        }
        */
    }
    render(){
        return(
            <div className = "mainGridWrapper">
                <div className = "rightSideMenu">Right Side Menu</div>
                <div className = "contentBody">
                    <TierListChart characterList = {this.state.inTierListGrid} onMouseUp = {(i) => this.onMouseUp(i)} onMouseLeave = {(i) => this.onMouseLeave(i)}/>
                    <CharacterSelectionGrid characterList = {this.state.inSelectionGrid} onMouseUp = {(i) => this.onMouseUp(i)}/>
                </div>
            </div>
        );
    }
}