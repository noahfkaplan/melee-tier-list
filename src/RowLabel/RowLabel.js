import React from "react"

export default class RowLabel extends React.Component{
    render(){
        return(
            <div className = "rowLabelWrapper">
                <button className = "expandButton" onClick ={(event)=>this.props.onClick(event)}>...</button>
                <textarea className = "rowLabelText" placeholder = {this.props.placeholder}></textarea>
            </div>
        );
    }
}