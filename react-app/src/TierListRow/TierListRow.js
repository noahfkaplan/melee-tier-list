import React from "react"
import {RowLabel} from "../RowLabel"
import {CharacterCard} from "../CharacterCard"

class TierListRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHighlighted:false,
        };
    }    
    createCharacterCards(){
        let characters = this.props.characters.map((icons) => 
                <CharacterCard 
                    className = "characterIcon"
                    onDragStart = {() => this.props.onDragStart(icons.characterName)} 
                    onDragOver = {(e)=> this.props.onDragOverIcon(e,icons.characterName)}
                    onDragLeave ={(e)=>this.props.onDragLeaveIcon(e)}
                    key = {icons.characterName}
                    name = {icons.characterName}
                    transparent = {icons.transparent}>
                </CharacterCard>
        );
        return characters;
    }
    render(){
        return(
            <div 
                className = {this.state.isHighlighted?"tierListRowHighlighted":"tierListRow"}
                data-testid = {this.state.isHighlighted?"row-highlighted":"row-not-highlighted"}
                onDrop = {()=>{this.props.onDrop(); this.setState({isHighlighted: false});}} 
                onDragOver = {(e)=>{e.preventDefault(); this.props.onDragOverRow(); this.setState({isHighlighted: true});}}
                onDragLeave = {()=>this.setState({isHighlighted: false})}>
                <RowLabel text = {this.props.text} onChange = {(text) => this.props.onChange(text)} onClick = {(event)=>this.props.onClick(event)} placeholder = {this.props.placeholder}/>
                {this.createCharacterCards()}
            </div>
        );
    }
}
export {TierListRow}