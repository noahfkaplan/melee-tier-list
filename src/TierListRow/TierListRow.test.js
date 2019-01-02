import React from "react"
import TierListRow from "./TierListRow"
import { render } from "react-testing-library";

describe("Tier List Row" , function(){
    it("renders without crashing", function(){
    let element = [<div key = "placeholder">placeholder</div>];
        render(<TierListRow characters = {element}/>);
    });
    it("renders the correct icons", function(){
        let elements = [<div key = "placeholder">placeholder</div>];
        const {getByText} = render(<TierListRow characters = {elements}></TierListRow>);
        const placeholderElement = getByText("placeholder");
        expect(placeholderElement).toBeDefined();
    });
});