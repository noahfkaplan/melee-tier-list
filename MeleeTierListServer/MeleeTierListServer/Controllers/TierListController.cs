using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeleeTierListServer.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MeleeTierListServer.Controllers
{
    [Route("api/[controller]")]
    public class TierListController : Controller
    {
        private readonly TierListContext _context;
        public TierListController(TierListContext context)
        {
            _context = context;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TierListRow>> GetTierListRow(int id)
        {
            var tierListRow = await _context.tierListRows.FindAsync(id);

            if (tierListRow == null)
            {
                return NotFound();
            }

            return tierListRow;
        }
    }
}
