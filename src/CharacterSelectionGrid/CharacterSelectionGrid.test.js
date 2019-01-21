import React from "react"
import CharacterSelectionGrid from "./CharacterSelectionGrid"
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = (characterList, drop,dragOver,dragLeave) => {
    const {getByAltText, getByTestId} = render(<CharacterSelectionGrid 
        characterList = {characterList} 
        onDrop = {drop}
        onDragOver ={dragOver}
        onDragLeave ={dragLeave}/>);
    return {getByAltText, getByTestId};
}

afterEach(cleanup)

test("It should render the correct character icons", () =>{
    const characterList = ["fox","yoshi","bowser"];
    const {getByAltText} = setup(characterList, jest.fn(),jest.fn(),jest.fn());
    const fox = getByAltText("fox");
    const yoshi = getByAltText("yoshi");
    const bowser = getByAltText("bowser");
    expect(fox).toBeDefined();
    expect(yoshi).toBeDefined();
    expect(bowser).toBeDefined();
});
test("It should pass the passed in onDragOver function to each characterIcon", () =>{
    const characterList = ["fox"];
    const dragOver = jest.fn();
    const {getByAltText} = setup(characterList, jest.fn(),dragOver,jest.fn());
    const fox = getByAltText("fox");
    fireEvent.dragOver(fox);
    expect(dragOver).toBeCalled();
});
test("It should pass the passed in onDragLeave function to each characterIcon", () =>{
    const characterList = ["fox"];
    const dragLeave = jest.fn();
    const {getByAltText} = setup(characterList, jest.fn(),jest.fn(),dragLeave);
    const fox = getByAltText("fox");
    fireEvent.dragLeave(fox);
    expect(dragLeave).toBeCalled();
});
test("It should call passed in drop function with -1", () =>{
    const characterList = ["fox"];
    const drop = jest.fn();
    const {getByTestId} = setup(characterList, drop,jest.fn(),jest.fn());
    const grid = getByTestId("CharacterSelectionGrid");
    fireEvent.drop(grid);
    expect(drop).toBeCalledWith(expect.anything(),-1);
});