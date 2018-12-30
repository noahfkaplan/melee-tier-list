import React from "react"
import ReactDOM from "react-dom"
import TierListChart from "./TierListChart"
import { render } from "react-testing-library";

describe("Tier List Grid" , function(){
    it("renders without crashing", function(){
        let characterName = "fox";
        render(<TierListChart characterList = {[[characterName,1]]}/>);
    });
});