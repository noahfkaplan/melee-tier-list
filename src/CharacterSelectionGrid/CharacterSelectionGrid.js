import React from 'react';
import CharacterCard from "../CharacterCard/CharacterCard";

export default class CharacterSelectionGrid extends React.Component{
    getCharacterIcons(){
        let characterList = this.props.characterList;
        let icons = characterList.map((name) => {
            return (
                <CharacterCard 
                    className = "characterIcon"
                    onDragOver = {(e,character) => this.props.onDragOver(e,character)}
                    onDragLeave ={(e)=>this.props.onDragLeave(e)}
                    key = {name}
                    name ={name}/>
            );
        })
        return icons;
    }
    render(){
        return(   
            <div className = "characterSelectionGrid" data-testid = "CharacterSelectionGrid" onDrop = {(e)=>this.props.onDrop(e,-1)} onDragOver = {(e)=>e.preventDefault(e)}>
                {this.getCharacterIcons()}
            </div>
        );    
    }
}