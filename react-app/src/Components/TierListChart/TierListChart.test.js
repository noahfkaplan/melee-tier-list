import React from "react"
import {TierListChart} from "./TierListChart"
import { render, cleanup } from "react-testing-library";

const setup = (characterList) => {
    const {getByAltText} = render(<TierListChart characterList = {characterList}/>);
    return {getByAltText};
}

afterEach(cleanup)

test("It should renders the correct icons for each row", ()=>{
    let characterList = [
        {characterName: "yoshi",row: 0,transparent:false},
        {characterName: "bowser",row: 1,transparent:false},
        {characterName: "falcon",row: 2,transparent:false},
        {characterName: "luigi",row: 3,transparent:false},
        {characterName: "peach",row: 4,transparent:false},
        {characterName: "mario",row: 5,transparent:false}];
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