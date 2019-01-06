import React from "react"
import ContextMenu from "./ContextMenu"
import { render, getByText } from "react-testing-library";

const setup = (contextMenuOptions) => {
    const {getByText} = render(<ContextMenu menuOptions = {contextMenuOptions}/>);
    return {getByText};
}
test("It should render the correct context menu options",() => {
    const {getByText} = setup(["option1", "option2"]);
    const option1 = getByText("option1");
    const option2 = getByText("option2");
    expect(option1).toBeDefined();
    expect(option2).toBeDefined();
});