export const GetDefaultCharacterList = (async() => {
    let newCharacterList = null;
    await fetch('http://localhost:53414/api/load')
        .then(res => res.json())
        .then((data) => {
            newCharacterList = data.map((character) => ({characterName: character.name, row: character.tier, transparent:false}));
        });
    return newCharacterList
});

export const GetCharacterListById = (async (Id) =>{
    let newCharacterList = null;
    await fetch('http://localhost:53414/api/load/'+Id)
        .then(res => res.json())
        .then((data) => {
            newCharacterList = data.map((character) => ({characterName: character.name, row: character.tier, transparent:false}));
        });
    return newCharacterList;    
});

export default {GetDefaultCharacterList, GetCharacterListById};