import React from "react"
import {render} from "react-testing-library"
import RowLabel from "./RowLabel"

const setup = (placeholderText) => {
    const {getByPlaceholderText} = render(<RowLabel placeholder = {placeholderText}></RowLabel>);
    return getByPlaceholderText;
}
test("It sets placeholder text correctly", ()=> {
    const placeholderText = "placeholder";
    const getByPlaceholderText = setup(placeholderText);
    const label = getByPlaceholderText(placeholderText);
    expect(label).toBeDefined();
});