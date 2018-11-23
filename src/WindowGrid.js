import React from "react"
import CharacterSelectionGrid from "./CharacterSelectionGrid/CharacterSelectionGrid"
import TierListChart from "./TierListChart"

export default function WindowGrid(){
    return(
        <div className = "mainGridWrapper">
            <div className = "rightSideMenu">Right Side Menu</div>
            <div className = "contentBody">
                <TierListChart/>
                <CharacterSelectionGrid/>
            </div>
        </div>
    )
}