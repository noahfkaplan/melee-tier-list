import React from "react"
import ReactDOM from "react-dom"
import CharacterSelectionGrid from "./CharacterSelectionGrid"
import { render } from "react-testing-library";

describe("Character Selection Grid" , function(){
    it("renders without crashing", function(){
        const div = document.createElement("div");
        ReactDOM.render(<CharacterSelectionGrid/>, div);
    });
});