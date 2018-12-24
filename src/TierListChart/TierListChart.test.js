import React from "react"
import ReactDOM from "react-dom"
import TierListChart from "./TierListChart"
import { render } from "react-testing-library";

describe("Character Selection Grid" , function(){
    it("renders without crashing", function(){
        const div = document.createElement("div");
        let characterName = "fox";
        ReactDOM.render(<TierListChart characterList = {[[characterName,1]]}/>, div);
    });
});