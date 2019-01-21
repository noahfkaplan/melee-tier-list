import React from "react"
import TierListRow from "./TierListRow"
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = (characters) => {
    const {getByAltText, getByTestId} = render(<TierListRow characters = {characters}/>);
    return {getByAltText, getByTestId};
}

afterEach(cleanup)

test("It should render the correct icons", ()=>{
    const characters = ["fox","falco"];
    const {getByAltText} = setup(characters);
    const fox = getByAltText(characters[0]);
    const falco = getByAltText(characters[1]);
    expect(fox).toBeDefined();
    expect(falco).toBeDefined();
});
test("It should highlight on dragOver", ()=>{
    const {getByTestId} = setup(["fox"]);
    let row = getByTestId("not-highlighted");
    fireEvent.dragOver(row)
    row = getByTestId("highlighted");
    expect(row).toBeDefined();
});
test("It should stop highlighting on dragLeave", ()=>{
    const {getByTestId} = setup(["fox"]);
    let row = getByTestId("not-highlighted");
    fireEvent.dragOver(row)
    row = getByTestId("highlighted");
    fireEvent.dragLeave(row);
    row = getByTestId("not-highlighted");
    expect(row).toBeDefined();
});