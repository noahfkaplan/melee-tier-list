import React from "react"
import CharacterSelectionGrid from "./CharacterSelectionGrid"

export default function WindowGrid(){
    return(
        <div className = "mainGridWrapper">
            <div className = "rightSideMenu">Right Side Menu</div>
            <div className = "contentBody">
                <CharacterSelectionGrid/>
            </div>
        </div>
    )
}