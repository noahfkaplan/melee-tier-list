import React from "react"
import ContextMenu from "./ContextMenu"
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = (contextMenuNames, contextMenuFunctions) => {
    const {getByText, getAllByTestId} = render(<ContextMenu menuOptionNames = {contextMenuNames} menuOptionFunctions = {contextMenuFunctions}/>);
    return {getByText,getAllByTestId};
}

afterEach(cleanup)

test("It should render the correct context menu options",() => {
    const {getByText} = setup(["option1", "option2"], [jest.fn(), jest.fn()]);
    const option1 = getByText("option1");
    const option2 = getByText("option2");
    expect(option1).toBeDefined();
    expect(option2).toBeDefined();
});

test("It Calls the passed in function on click", () =>{
    const option1Function = jest.fn();
    const option2Function = jest.fn();
    const {getByText} = setup(["option1", "option2"], [option1Function, option2Function]);
    const option1 = getByText("option1");
    fireEvent.click(option1);
    expect(option1Function).toBeCalled();
    expect(option2Function).not.toBeCalled();
});
test("It is highlighted on mouseOver", () => {
    const {getByText,getAllByTestId} = setup(["option1", "option2"], [jest.fn(), jest.fn()]);
    const optionsBeforeMouseOver = getAllByTestId("not-highlighted");
    const option1 = getByText("option1");
    fireEvent.mouseOver(option1);
    const optionsAfterMouseOver = getAllByTestId("highlighted");
    expect(optionsBeforeMouseOver).toHaveLength(2);
    expect(optionsAfterMouseOver).toHaveLength(1);

});