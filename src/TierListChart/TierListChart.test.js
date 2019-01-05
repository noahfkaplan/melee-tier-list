import React from "react"
import TierListChart from "./TierListChart"
import { render } from "react-testing-library";

describe("Tier List Grid" , function(){
    it("renders without crashing", function(){
        let character = [["fox",1]];
        render(<TierListChart characterList = {character}/>);
    });
    it("renders the correct icons for each row", function(){
        let characterList = [["yoshi",0],["bowser",1],["falcon",2],["luigi",3],["peach",4],["mario",5]];
        const {getByAltText} = render(<TierListChart characterList = {characterList}/>);
        
        const yoshi = getByAltText("yoshi");
        const bowser = getByAltText("bowser");
        const falcon = getByAltText("falcon");
        const luigi = getByAltText("luigi");
        const peach = getByAltText("peach");
        const mario = getByAltText("mario");

        expect(yoshi).toBeDefined();
        expect(bowser).toBeDefined();
        expect(falcon).toBeDefined();
        expect(luigi).toBeDefined();
        expect(peach).toBeDefined();
        expect(mario).toBeDefined();
    });
});