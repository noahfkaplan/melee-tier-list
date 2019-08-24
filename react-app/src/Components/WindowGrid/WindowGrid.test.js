import React from "react"
import {WindowGrid} from "./WindowGrid"
import { render, cleanup, wait } from "react-testing-library";
import {GetDefaultCharacterList} from "../../api/Services/CharacterService"

jest.mock("../../api/Services/CharacterService");
const CharacterServiceMock = require("../../api/Services/CharacterService");

const GetDefaultCharacterListMock = jest.fn();
GetDefaultCharacterListMock.mockImplementation(() =>{
    return([{characterName: "test", row: -100, transparent: false}]);
});
CharacterServiceMock.mockImplementation(() => {
    return {
        GetDefaultCharacterList: GetDefaultCharacterListMock,
    }
});

const setup = (characterList) => {
    const {getByAltText, getByTestId} = render(<WindowGrid characterList = {characterList}/>);
    return {getByAltText,getByTestId};
}

afterEach(cleanup)

test("It renders a toolbar", async ()=>{
    const characterList = ["fox"];
    const {getByTestId} = setup(characterList);
    await wait(() => expect(GetDefaultCharacterListMock).ToBeCalled())
    const toolbar = getByTestId('ToolBarWrapper');
    expect(toolbar).toBeDefined();
});
test("It renders a character selection grid", async ()=> {
    const characterList = ["fox"];
    const {getByTestId} = setup(characterList);
    await wait(() => expect(GetDefaultCharacterListMock).ToBeCalled())
    await wait(() => getByTestId("CharacterSelectionGrid"));
    const characterSelectionGrid = getByTestId("CharacterSelectionGrid");
    expect(characterSelectionGrid).toBeDefined();
});

test("It renders a tier list chart", async () => {
    const characterList = ["fox"];
    const {getByTestId} = setup(characterList);
    await wait(() => expect(GetDefaultCharacterListMock).ToBeCalled())
    const tierListChart = getByTestId("TierListChart");
    expect(tierListChart).toBeDefined();
})