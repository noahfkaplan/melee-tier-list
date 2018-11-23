import React from 'react';
import Draggable from 'react-draggable';

export default class CharacterCard extends React.Component{
    constructor(props){
        super(props);
        this.characterName = props.name;
        this.characterImg = require(`../characterIcons/${this.characterName}.png`)
    }
    preventDragHandler = (e) => {
        e.preventDefault();
    }      
    render() {
        return (
            <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="handle">
                <img  className = "characterImg" src={this.characterImg} alt={this.characterName} onDragStart = {this.preventDragHandler}/>
            </div>
            </Draggable>
        );
    }
}