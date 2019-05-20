using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using MeleeTierListServer.Models;
using MeleeTierListServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace MeleeTierListServer.Controllers
{

    [Route("api/[controller]")]
    public class LoadController : Controller
    {
        private CharacterRepository characterRepository;
        public LoadController()
        {
            characterRepository = new CharacterRepository();
        }

        // GET api/load/5
        [HttpGet("{TierListId}")]
        public Character[] Get(string id)
        {
            return characterRepository.GetCharactersByTierListID(id);
        }
    }
}
