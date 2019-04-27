import React from "react"
import {render, fireEvent} from "react-testing-library"
import Popup from "./Popup"

const setup = (text, onClick) =>{
    const {getByText} = render(<Popup closePopup = {onClick} text = {text}></Popup>);
    return getByText;
};
test("It renders without crashing", () => {
    const text = "test text";
    const onClick = jest.fn()
    const getByText = setup(text, onClick);
    const popupText = getByText(text);
    expect(popupText).toBeDefined();
});

test("It calls onClick prop when button is clicked", () => {
    const text = "test text";
    const onClick = jest.fn();
    const getByText = setup(text, onClick());
    const button = getByText("Close");
    fireEvent.click(button);
    expect(onClick).toBeCalled();
});