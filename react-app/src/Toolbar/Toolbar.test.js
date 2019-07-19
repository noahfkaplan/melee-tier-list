import React from "react"
import {Toolbar} from "./Toolbar"
import { render, rerender,cleanup, fireEvent, wait } from "react-testing-library";

const setup = (fn) => {
    return render(<Toolbar search = {fn}/>);
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

test("It calls inputted function on search", async ()=>{    
    const mockFunction = jest.fn();
    const {getByText, getByPlaceholderText, findByText} = setup(mockFunction);
    const searchButton = getByText("Search")
    const searchValue = getByPlaceholderText("Search By TierList ID");
    const newValue = 'testing';
    fireEvent.change(searchValue, {
        target: {
            value: newValue,
        }
    });
    fireEvent.click(searchButton);
    expect(mockFunction).toBeCalledWith(newValue);
});
