import React from "react"
import ReactDOM from "react-dom"
import CharacterCard from "./CharacterCard"
import { fireEvent, render } from "react-testing-library";

describe("Character Card", function(){
    it("renders  without crashing", function(){
        let characterName = "fox";
        const icon = render(<CharacterCard name = {characterName}/>);
    });
});