using MeleeTierListServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeleeTierListServer.Services
{
    public class CharacterRepository
    {
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
