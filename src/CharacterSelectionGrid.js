import React from 'react';
import CharacterCard from './CharacterCard';

export default class CharacterSelectionGrid extends React.Component{
    constructor(props){
        super(props);
        this.characterList = ["drmario","mario","luigi","bowser","peach","yoshi","dk","falcon","ganon",
        "falco","fox","ness","iceclimbers","kirby","samus","sheik","link","younglink",
        "pichu","pikachu","jigglypuff","mewtwo","gnw","marth","roy"];
    }
    getCharacterIcons(){
        return(
            this.characterList.map((name) => {
                return (
                  <ul key={name}>
                    <CharacterCard name ={name}/>
                  </ul>
                );
            })
        );
    }
    render(){
        return(
            <div className = "characterSelectionGrid">
                {this.getCharacterIcons()}
            </div>
        );    
    }
}