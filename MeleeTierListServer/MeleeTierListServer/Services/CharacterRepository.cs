using MeleeTierListServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeleeTierListServer.Services
{
    public class CharacterRepository
    {
        public Character[] GetInitialCharacters()
        {
            return new Character[]
            {
                new Character
                {
                    Name = "drmario",
                    Tier = -1,
                },
                new Character
                {
                    Name = "mario",
                    Tier = -1,
                },
                new Character
                {
                    Name = "luigi",
                    Tier = -1,
                },
                new Character
                {
                    Name = "bowser",
                    Tier = -1,
                },
                new Character
                {
                    Name = "peach",
                    Tier = -1,
                },
                new Character
                {
                    Name = "yoshi",
                    Tier = -1,
                },
                new Character
                {
                    Name = "dk",
                    Tier = -1,
                },
                new Character
                {
                    Name = "falcon",
                    Tier = -1,
                },
                new Character
                {
                    Name = "ganon",
                    Tier = -1,
                },
                new Character
                {
                    Name = "falco",
                    Tier = -1,
                },
                new Character
                {
                    Name = "fox",
                    Tier = -1,
                },
                new Character
                {
                    Name = "ness",
                    Tier = -1,
                },
                new Character
                {
                    Name = "iceclimbers",
                    Tier = -1,
                },
                new Character
                {
                    Name = "kirby",
                    Tier = -1,
                },
                new Character
                {
                    Name = "samus",
                    Tier = -1,
                },
                new Character
                {
                    Name = "sheik",
                    Tier = -1,
                },
                new Character
                {
                    Name = "link",
                    Tier = -1,
                },
                new Character
                {
                    Name = "younglink",
                    Tier = -1,
                },
                new Character
                {
                    Name = "pichu",
                    Tier = -1,
                },
                new Character
                {
                    Name = "pikachu",
                    Tier = -1,
                },
                new Character
                {
                    Name = "jigglypuff",
                    Tier = -1,
                },
                new Character
                {
                    Name = "mewtwo",
                    Tier = -1,
                },
                new Character
                {
                    Name = "gnw",
                    Tier = -1,
                },
                new Character
                {
                    Name = "marth",
                    Tier = -1,
                },
                new Character
                {
                    Name = "roy",
                    Tier = -1,
                },
            };
        }
        public Character[] GetCharactersByTierListID(string tierListID)
        {

            return new Character[]
            {
                new Character
                {
                    Name = "fox",
                    Tier = 1,
                },
                new Character
                {
                    Name = "falco",
                    Tier = 2,
                },
                new Character
                {
                    Name = "peach",
                    Tier = 3,
                },
                new Character
                {
                    Name = "yoshi",
                    Tier = 4,
                },
                new Character
                {
                    Name = "mario",
                    Tier = 5,
                },
                new Character
                {
                    Name = "link",
                    Tier = 6,
                },
                new Character
                {
                    Name = "bowser",
                    Tier = 7,
                }
            };
        }
    }
}
