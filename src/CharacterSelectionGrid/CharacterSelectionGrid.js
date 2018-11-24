import React from 'react';
import CharacterCard from "../CharacterCard/CharacterCard";

export default class CharacterSelectionGrid extends React.Component{
    constructor(props){
        super(props);
        this.characterList = props.characterList;
    }
    getCharacterIcons(){
        let icons = this.characterList.map((name) => {
            return (
                <div className = "characterIcon" key = {name}>
                    <CharacterCard name ={name} onmouseup = {() => this.props.onmouseup(name)}/>
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