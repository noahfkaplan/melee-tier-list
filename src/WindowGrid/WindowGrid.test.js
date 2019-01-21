import React from "react"
import WindowGrid from "./WindowGrid"
import { render, cleanup } from "react-testing-library";

const setup = (characterList) => {
    const {getByAltText, getByTestId} = render(<WindowGrid characterList = {characterList}/>);
    return {getByAltText,getByTestId};
}

afterEach(cleanup)

test("It renders the passed in character names as Icons", ()=>{
    const characterList = ["fox","yoshi"];
    const {getByAltText} = setup(characterList);
    const foxIcon = getByAltText(characterList[0]);
    const yoshiIcon = getByAltText(characterList[1]);
    expect(foxIcon).toBeDefined();
    expect(yoshiIcon).toBeDefined();
});

test("It renders a character selection grid", ()=> {
    const characterList = ["fox"];
    const {getByTestId} = setup(characterList);
    const characterSelectionGrid = getByTestId("CharacterSelectionGrid");
    expect(characterSelectionGrid).toBeDefined();
});

test("It renders a tier list chart", () => {
    const characterList = ["fox"];
    const {getByTestId} = setup(characterList);
    const tierListChart = getByTestId("TierListChart");
    expect(tierListChart).toBeDefined();
})