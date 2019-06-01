import React from "react"

class Toolbar extends React.Component{
    constructor(props){
        super(props);        
        this.state = {value: ''};
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    render(){
        return(
            <div className = 'toolbarWrapper' data-testid ='ToolBarWrapper'>
                <button className = 'toolbarButton' onClick = {this.props.save}>Save</button>
                <div className = 'searchArea'>
                    <input type="text" value={this.state.value} className = 'toolbarText' placeholder = 'Search By TierList ID' onChange={(e)=>this.handleChange(e)} />
                    <button className = 'toolbarButton' onClick = {()=>this.props.search(this.state.searchText)}>Search</button>
                </div>
            </div>
        );
    }
}
export {Toolbar}