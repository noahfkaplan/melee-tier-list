import React from "react"
import TierListRow from "./TierListRow"
import CharacterCard from "../CharacterCard/CharacterCard"
import { render } from "react-testing-library";

describe("Tier List Row" , function(){
    it("renders without crashing", function(){
        let character = <CharacterCard name = "yoshi"/>;
        render(<TierListRow characters = {character}/>);
    });
    it("renders the correct icons", function(){
        let characters = [<CharacterCard key = "yoshi" name = "yoshi"/>, <CharacterCard key = "bowser" name = "bowser"/>];
        const {getByAltText} = render(<TierListRow characters = {characters}></TierListRow>);
        const yoshi = getByAltText("yoshi");
        const bowser = getByAltText("bowser");
        expect(yoshi).toBeDefined();
        expect(bowser).toBeDefined();
    });
});