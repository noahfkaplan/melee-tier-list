import React from 'react';
import CharacterCard from "../CharacterCard/CharacterCard";

export default class CharacterSelectionGrid extends React.Component{
    constructor(props){
        super(props);
        this.characterList = props.characterList;
    }
    getCharacterIcons(characterList){
        this.characterList = characterList;
        let icons = this.characterList.map((name) => {
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
    onDragOver = (ev) =>{
        ev.preventDefault();
    }
    render(){
        return(   
            <div className = "characterSelectionGrid" data-testid = "CharacterSelectionGrid" onDrop = {(e)=>this.props.onDrop(e,-1)} onDragOver = {(e)=>this.onDragOver(e)}>
                {this.getCharacterIcons(this.props.characterList)}
            </div>
        );    
    }
}