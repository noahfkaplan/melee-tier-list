import React from 'react';
import Draggable from 'react-draggable';
import fox from './characterIcons/fox.jpg'

export default class CharacterCard extends React.Component{
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
            grid={[25, 25]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="handle">
                <div className="square">
                    <img src={fox} className = "characterIcon" alt ="Fox" onDragStart = {this.preventDragHandler}/>
                </div>
            </div>
            </Draggable>
        );
    }
}