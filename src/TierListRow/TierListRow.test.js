import React from "react"
import TierListRow from "./TierListRow"
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = (characters) => {
    const {getByAltText, getByTestId} = render(<TierListRow onDragOverRow = {jest.fn()} characters = {characters}/>);
    return {getByAltText, getByTestId};
}

afterEach(cleanup)

test("It should render the correct icons", ()=>{
    const characters = 
        [{characterName: "fox",row: 1,transparent: false},
        {characterName: "falco",row: 1,transparent: false}];
    const {getByAltText} = setup(characters);
    const fox = getByAltText("fox");
    const falco = getByAltText("falco");
    expect(fox).toBeDefined();
    expect(falco).toBeDefined();
});
test("It should highlight on dragOver", ()=>{
    const {getByTestId} = setup([{characterName: "fox",row: -1,transparent: false}]);
    let row = getByTestId("row-not-highlighted");
    fireEvent.dragOver(row)
    row = getByTestId("row-highlighted");
    expect(row).toBeDefined();
});
test("It should stop highlighting on dragLeave", ()=>{
    const {getByTestId} = setup([{characterName: "fox",row: -1,transparent: false}]);
    let row = getByTestId("row-not-highlighted");
    fireEvent.dragOver(row)
    row = getByTestId("row-highlighted");
    fireEvent.dragLeave(row);
    row = getByTestId("row-not-highlighted");
    expect(row).toBeDefined();
});