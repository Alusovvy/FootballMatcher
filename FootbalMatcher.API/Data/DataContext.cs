using FootbalMatcher.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FootbalMatcher.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<Game> Games { get; set; }
    }
}