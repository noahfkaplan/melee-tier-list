import React from "react"
import CharacterSelectionGrid from "./CharacterSelectionGrid"
import { render, getByAltText } from "react-testing-library";

describe("Character Selection Grid" , function(){
    it("renders without crashing", function(){
        let characterName = ["fox"];
        const grid = render(<CharacterSelectionGrid characterList = {characterName}/>);
    });
    it("renders all character icons", function(){
        let characterNames = ["fox","yoshi","bowser"];
        const {getByAltText} = render(<CharacterSelectionGrid characterList = {characterNames}/>);
        const fox = getByAltText("fox");
        const yoshi = getByAltText("yoshi");
        const bowser = getByAltText("bowser");
        expect(fox).toBeDefined();
        expect(yoshi).toBeDefined();
        expect(bowser).toBeDefined();
    });
});