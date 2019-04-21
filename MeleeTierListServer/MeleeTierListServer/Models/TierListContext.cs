using Microsoft.EntityFrameworkCore;

namespace MeleeTierListServer.Models
{
    public class TierListContext : DbContext
    {
        public TierListContext(DbContextOptions<TierListContext> options)
            : base(options)
        {
        }

        public DbSet<TierListRow>  tierListRows{ get; set; }
    }
}
