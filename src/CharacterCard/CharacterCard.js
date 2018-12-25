import React from 'react';

export default class CharacterCard extends React.Component{
    constructor(props){
        super(props);
        this.characterName = props.name;
        this.characterImg = require(`../characterIcons/${this.characterName}.png`);
    }
    onDragStart = (ev, name) =>{
        ev.dataTransfer.setData("name", name);
    }
    render() {
        return (
            <div className="draggable" 
                draggable 
                onDragStart={(e)=>this.onDragStart(e, this.characterName)}
                /*onMouseEnter = {(character) => this.props.onMouseEnter(this.characterName)}
                onMouseLeave = {()=>this.props.onMouseLeave()}*/
                onDragEnter = {(e,character)=>this.props.onDragEnter(e,this.characterName)}
                onDragLeave ={(e)=>this.props.onDragLeave(e)}>
                <img  className = "characterImg" src={this.characterImg} alt={this.characterName}/>
            </div>
        );
    }
}