import React from "react"
import {Toolbar} from "./Toolbar"
import { render, cleanup, fireEvent } from "react-testing-library";

const setup = (fn) => {
    const {getByText, getByPlaceholderText} = render(<Toolbar search = {fn}/>);
    return {getByText, getByPlaceholderText};
}

afterEach(cleanup)

test("It renders a save button", ()=>{
    const mockFunction = jest.fn();
    const {getByText} = setup(mockFunction);
    const saveButton = getByText("Save");
    expect(saveButton).toBeDefined();
});

test("It renders a search button", () =>{
    const mockFunction = jest.fn();
    const {getByText} = setup(mockFunction);
    const searchButton = getByText("Search");
    expect(searchButton).toBeDefined();
});

test("It renders a search input" , ()=>{
    const mockFunction = jest.fn();
    const {getByPlaceholderText} = setup(mockFunction);
    const searchInput = getByPlaceholderText("Search By TierList ID");
    expect(searchInput).toBeDefined();
});
test("It calls inputted function on search",()=>{    
    const mockFunction = jest.fn();
    const {getByText} = setup(mockFunction);
    const searchButton = getByText("Search")
    fireEvent.click(searchButton);
    expect(mockFunction).toBeCalled();
});
