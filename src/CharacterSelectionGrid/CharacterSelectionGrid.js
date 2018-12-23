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
                <div className = "characterIcon" key = {name}>
                    <CharacterCard 
                        name ={name}/>
                </div>
            );
        })
        return icons;
    }
    onDragOver = (ev) =>{
        ev.preventDefault();
    }
    render(){
        return(   
            <div className = "droppable" onDrop = {(e)=>this.props.onDrop(e,7)} onDragOver ={(e)=>this.onDragOver(e)}>
                <div className = "characterSelectionGrid" /*onMouseOver = {() => this.props.onMouseOver()}*/>
                    {this.getCharacterIcons(this.props.characterList)}
                </div>
            </div>
        );    
    }
}