import React from "react"
import ReactDOM from "react-dom"
import WindowGrid from "./WindowGrid"
import { render } from "react-testing-library";

describe("Character Selection Grid" , function(){
    it("renders without crashing", function(){
        const div = document.createElement("div");
        ReactDOM.render(<WindowGrid/>, div);
    });
});