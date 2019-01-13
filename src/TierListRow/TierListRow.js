import React from "react"
import RowLabel from "../RowLabel/RowLabel"

export default class TierListRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHighlighted:false,
        };
    }
    onDragOver(e){
        e.preventDefault();
        this.setState({
            isHighlighted: true,
        });
    }
    onDragLeave(){
        this.setState({
            isHighlighted: false,
        });
    }
    onDrop(e){
        this.props.onDrop(e);
        this.setState({
            isHighlighted: false,
        });
    }
    render(){
        return(
            <div 
                className = {this.state.isHighlighted?"tierListRowHighlighted":"tierListRow"}
                data-testid = {this.state.isHighlighted?"highlighted":"not-highlighted"} 
                onDrop = {(e)=>this.onDrop(e)} 
                onDragOver = {(e)=>this.onDragOver(e)}
                onDragLeave = {()=>this.onDragLeave()}>
                <RowLabel text = {this.props.text} onChange = {(text) => this.props.onChange(text)} onClick = {(event)=>this.props.onClick(event)} placeholder = {this.props.placeholder}/>
                {this.props.characters}
            </div>
        );
    }
}