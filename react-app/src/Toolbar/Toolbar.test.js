import React from "react"
import Toolbar from "./Toolbar"
import { render, cleanup } from "react-testing-library";

const setup = () => {
    const {getByText, getByPlaceholderText} = render(<Toolbar/>);
    return {getByText, getByPlaceholderText};
}

afterEach(cleanup)

test("It renders a save button", ()=>{
    const {getByText} = setup();
    const saveButton = getByText("Save");
    expect(saveButton).toBeDefined();
});

test("It renders a search button", () =>{
    const {getByText} = setup();
    const searchButton = getByText("Search");
    expect(searchButton).toBeDefined();
});

test("It renders a search input" , ()=>{
    const {getByPlaceholderText} = setup();
    const searchInput = getByPlaceholderText("Search By TierList ID");
    expect(searchInput).toBeDefined();
});

