import React from 'react';

class CharacterCard extends React.Component{
    constructor(props){
        super(props);
        this.characterName = props.name;
        this.characterImg = require(`../characterIcons/${this.characterName}.png`);
    }
    render() {
        return (
            <div className="draggable" 
                draggable 
                onDragStart={()=>this.props.onDragStart(this.characterName)}
                onDragOver = {(e,character)=>this.props.onDragOver(e,this.characterName)}
                onDragLeave ={(e)=>this.props.onDragLeave(e)}>
                <img className = {this.props.transparent?"characterImgTransparent":"characterImg"} src={this.characterImg} alt={this.characterName}/>
            </div>
        );
    }
}
export {CharacterCard};