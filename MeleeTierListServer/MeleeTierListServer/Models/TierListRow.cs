using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeleeTierListServer.Models
{
    public class TierListRow
    {
        public int ID;
        public Guid RowID;
        public Guid TierListID;
        public int RowNumber;
        public string CharacterList;
    }
}
