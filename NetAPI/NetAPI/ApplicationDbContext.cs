using Microsoft.EntityFrameworkCore;
using NetAPI.Entities;

namespace NetAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Genre> Genres {get; set;}
    }
}