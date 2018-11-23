import React from 'react';
import CharacterCard from "../CharacterCard/CharacterCard";

export default class CharacterSelectionGrid extends React.Component{
    constructor(props){
        super(props);
        this.characterList = ["drmario","mario","luigi","bowser","peach","yoshi","dk","falcon","ganon",
        "falco","fox","ness","iceclimbers","kirby","samus","sheik","link","younglink",
        "pichu","pikachu","jigglypuff","mewtwo","gnw","marth","roy"];
    }
    getCharacterIcons(){
        let icons = this.characterList.map((name) => {
            return (
                <div className = "characterIcon" key = {name}>
                    <CharacterCard name ={name}/>
                </div>
            );
        })
        return icons;
    }
    render(){
        return(   
            <div className = "characterSelectionGrid">
                {this.getCharacterIcons()}
            </div>
        );    
    }
}