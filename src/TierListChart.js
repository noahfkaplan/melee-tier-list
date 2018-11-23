import React from "react"
import TierListRow from "./TierListRow"

export default class TierListChart extends React.Component{
    render(){
        return(
            <div className = "tierListTable">
                <TierListRow></TierListRow>
                <TierListRow></TierListRow>
                <TierListRow></TierListRow>
                <TierListRow></TierListRow>
                <TierListRow></TierListRow>
                <TierListRow></TierListRow>
            </div>
        );
    }
}