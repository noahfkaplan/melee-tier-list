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
                    /*onMouseEnter = {(character) => this.props.onMouseEnter(character)}
                    onMouseLeave = {() => this.props.onMouseLeave()}*/
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
            <div className = "droppable" onDrop = {(e)=>this.props.onDrop(e,7)} onDragOver = {(e)=>this.onDragOver(e)}>
                <div className = "characterSelectionGrid" >
                    {this.getCharacterIcons(this.props.characterList)}
                </div>
            </div>
        );    
    }
}