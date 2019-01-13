import React from "react"
import TierListRow from "./TierListRow"
import { render, fireEvent } from "react-testing-library";

const setup = () => {
    let element = [<div key = "placeholder">placeholder</div>];
    const {getByText, getByTestId} = render(<TierListRow characters = {element}/>);
    return {getByText, getByTestId};
}

test("It should render the correct icons", ()=>{
    const {getByText} = setup();
    const placeholderElement = getByText("placeholder");
    expect(placeholderElement).toBeDefined();
});
test("It should highlight on dragOver", ()=>{
    const {getByTestId} = setup();
    let row = getByTestId("not-highlighted");
    fireEvent.dragOver(row)
    row = getByTestId("highlighted");
    expect(row).toBeDefined();
});
test("It should stop highlighting on dragLeave", ()=>{
    const {getByTestId} = setup();
    let row = getByTestId("not-highlighted");
    fireEvent.dragOver(row)
    row = getByTestId("highlighted");
    fireEvent.dragLeave(row);
    row = getByTestId("not-highlighted");
    expect(row).toBeDefined();
});