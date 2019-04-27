import React from "react"
import {render, fireEvent} from "react-testing-library"
import RowLabel from "./RowLabel"

const setup = (placeholderText, text, onClick) => {
    const {getByPlaceholderText,getByText, getByTestId} = render(<RowLabel placeholder = {placeholderText} text = {text} onClick = {onClick}></RowLabel>);
    return {getByPlaceholderText, getByText, getByTestId};
}
test("It sets placeholder text correctly", ()=> {
    const placeholderText = "placeholder";
    const {getByPlaceholderText} = setup(placeholderText, "", jest.fn());
    const label = getByPlaceholderText(placeholderText);
    expect(label).toBeDefined();
});
test("It updated the text based on the passed in text property", ()=> {
    const text = "testText";
    const {getByText} = setup("", text,jest.fn());
    const label = getByText(text);
    expect(label).toBeDefined();
});
test("It calls passed in function on expand button click", ()=> {
    const onClick = jest.fn();
    const {getByTestId} = setup("","",onClick());
    const expandButton = getByTestId("expand-button");
    fireEvent.click(expandButton);
    expect(onClick).toBeCalled();
});