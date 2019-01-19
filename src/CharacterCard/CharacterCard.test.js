import React from "react"
import ReactDOM from "react-dom"
import CharacterCard from "./CharacterCard"
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = (characterName, dragOver, dragLeave) => {
    const {getByAltText} = render(<CharacterCard name = {characterName} onDragOver = {dragOver} onDragLeave ={dragLeave}/>);
    return {getByAltText};
}

afterEach(cleanup)

test("It should render the correct character icon", ()=>{
    let characterName = "fox";
    const {getByAltText} = setup(characterName, jest.fn(), jest.fn());
    const icon = getByAltText(characterName);
    expect(icon).toBeDefined();
});

test("It should call passed in onDragOver with the character name", ()=>{
    let characterName = "fox";
    const dragOver = jest.fn();
    const {getByAltText} = setup(characterName, dragOver, jest.fn());
    const icon = getByAltText(characterName);
    fireEvent.dragOver(icon);
    expect(dragOver).toBeCalledWith(expect.anything(),characterName);
});

test("It should call passed in onDragLeave function", () =>{
    let characterName = "fox";
    const dragLeave = jest.fn();
    const {getByAltText} = setup(characterName, jest.fn(), dragLeave);
    const icon = getByAltText(characterName);
    fireEvent.dragLeave(icon);
    expect(dragLeave).toBeCalled();
});