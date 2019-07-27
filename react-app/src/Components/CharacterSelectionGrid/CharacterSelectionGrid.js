import React from 'react';
import {CharacterCard} from "../CharacterCard";

class CharacterSelectionGrid extends React.Component{
    getCharacterIcons(){
        let characterList = this.props.characterList;
        let icons = characterList.map((icon) => {
            return (
                <CharacterCard 
                    className = "characterIcon"
                    onDragStart = {(name) => this.props.onDragStart(name)}
                    onDragOver = {(e,character) => this.props.onDragOverIcon(e,icon.characterName, icon.row)}
                    onDragLeave ={(e)=>this.props.onDragLeaveIcon(e)}
                    key = {icon.characterName}
                    name ={icon.characterName}
                    transparent = {icon.transparent}/>
            );
        })
        return icons;
    }
    render(){
        return(   
            <div className = "characterSelectionGrid" data-testid = "CharacterSelectionGrid" onDrop = {()=>this.props.onDrop()} onDragOver = {(e)=>e.preventDefault(e)}>
                {this.getCharacterIcons()}
            </div>
        );    
    }
}
export {CharacterSelectionGrid}