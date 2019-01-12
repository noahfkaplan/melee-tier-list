import React from "react"
import ContextMenu from "../ContextMenu/ContextMenu";

export default class RowLabel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuExpanded:false,
        }
    }
    render(){
        return(
            <div className = "rowLabelWithContextMenu">
                <div className = "rowLabelWrapper">
                    <button className = "expandButton" onClick ={()=>this.onClick()}>{this.state.menuExpanded?"<":">"}</button>
                    <textarea className = "rowLabelText" placeholder = {this.props.placeholder}></textarea>
                </div>
                {this.renderContextMenu()}
            </div>
        );
    }
    onClick = () =>{
        let nextMenuExpandedState = !this.state.menuExpanded;
        this.setState({
            menuExpanded : nextMenuExpandedState,
        });
    }
    renderContextMenu = () => {
        let menu = null;
        if(this.state.menuExpanded){
            menu = <ContextMenu menuOptions = {["option1","option2"]}></ContextMenu>
        }
        return menu;
    }
}