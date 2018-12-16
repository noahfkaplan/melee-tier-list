import React from "react"
import ReactDOM from "react-dom"
import CharacterCard from "./CharacterCard"
import { fireEvent, render } from "react-testing-library";

describe("Character Card", function(){
    it("renders  without crashing", function(){
        const div = document.createElement('div');
        ReactDOM.render(<CharacterCard name= "fox" />, div);
    });
    it("moves on drag", function(){
        const div = document.createElement('div');
        let characterName = "fox";
        const {getByAltText} = render(<CharacterCard name= {characterName} />);
        fireEvent.drag(getByAltText(characterName));
    });//this test needs more work. it doesn't actually move the card or assert anything about it
});