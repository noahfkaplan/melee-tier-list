import React from "react"
import RowLabel from "../RowLabel/RowLabel"
import CharacterCard from "../CharacterCard/CharacterCard"

export default class TierListRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHighlighted:false,
        };
    }    
    createCharacterCards(){
        let characters = this.props.characters.map((name) => 
                <CharacterCard 
                    className = "characterIcon" 
                    onDragOver = {(e,name)=>this.props.onDragOverIcon(e,name)}
                    onDragLeave ={(e)=>this.props.onDragLeaveIcon(e)}
                    key = {name}
                    name = {name}>
                </CharacterCard>
        );
        return characters;
    }
    render(){
        return(
            <div 
                className = {this.state.isHighlighted?"tierListRowHighlighted":"tierListRow"}
                data-testid = {this.state.isHighlighted?"highlighted":"not-highlighted"} 
                onDrop = {(e)=>{this.props.onDrop(e); this.setState({isHighlighted: false});}} 
                onDragOver = {(e)=>{e.preventDefault(); this.setState({isHighlighted: true});}}
                onDragLeave = {()=>this.setState({isHighlighted: false})}>
                <RowLabel text = {this.props.text} onChange = {(text) => this.props.onChange(text)} onClick = {(event)=>this.props.onClick(event)} placeholder = {this.props.placeholder}/>
                {this.createCharacterCards()}
            </div>
        );
    }
}