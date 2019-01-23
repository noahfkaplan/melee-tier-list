import React from "react"
import TierListChart from "./TierListChart"
import { render, cleanup } from "react-testing-library";

const setup = (characterList) => {
    const {getByAltText} = render(<TierListChart characterList = {characterList}/>);
    return {getByAltText};
}

afterEach(cleanup)

test("It should renders the correct icons for each row", ()=>{
    let characterList = [["yoshi",0],["bowser",1],["falcon",2],["luigi",3],["peach",4],["mario",5]];
    const {getByAltText} = setup(characterList);
    
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