import React from 'react';
import CharacterCard from "../CharacterCard/CharacterCard";

export default class CharacterSelectionGrid extends React.Component{
    getCharacterIcons(){
        let characterList = this.props.characterList;
        let icons = characterList.map(([name,transparent]) => {
            return (
                <CharacterCard 
                    className = "characterIcon"
                    onDragStart = {(name) => this.props.onDragStart(name)}
                    onDragOver = {(e,character) => this.props.onDragOverIcon(e,character,-1)}
                    onDragLeave ={(e)=>this.props.onDragLeaveIcon(e)}
                    key = {name}
                    name ={name}
                    transparent = {transparent}/>
            );
        })
        return icons;
    }
    render(){
        return(   
            <div className = "characterSelectionGrid" data-testid = "CharacterSelectionGrid" onDrop = {()=>this.props.onDrop(-1)} onDragOver = {(e)=>e.preventDefault(e)}>
                {this.getCharacterIcons()}
            </div>
        );    
    }
}