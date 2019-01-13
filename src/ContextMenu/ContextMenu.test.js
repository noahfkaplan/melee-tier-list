import React from "react"
import ContextMenu from "./ContextMenu"
import { render, fireEvent } from "react-testing-library";

const setup = (contextMenuNames, contextMenuFunctions) => {
    const {getByText} = render(<ContextMenu menuOptionNames = {contextMenuNames} menuOptionFunctions = {contextMenuFunctions}/>);
    return {getByText};
}
test("It Calls the passed in function on click", () =>{
    const option1Function = jest.fn();
    const option2Function = jest.fn();
    const {getByText} = setup(["option1", "option2"], [option1Function, option2Function]);
    const option1 = getByText("option1");
    fireEvent.click(option1);
    expect(option1Function).toBeCalled();
    expect(option2Function).not.toBeCalled();
});
test("It should render the correct context menu options",() => {
    const option1Function = jest.fn();
    const option2Function = jest.fn();
    const {getByText} = setup(["option1", "option2"], [option1Function, option2Function]);
    const option1 = getByText("option1");
    const option2 = getByText("option2");
    expect(option1).toBeDefined();
    expect(option2).toBeDefined();
});