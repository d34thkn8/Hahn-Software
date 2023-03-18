using Microsoft.EntityFrameworkCore;
using ReplacementTool.API.Domain.Entities;
using ReplacementTool.API.Infrastructure.Persistence.Configurations;

namespace ReplacementTool.API.Infrastructure.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Info> InfoList { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProjectConfiguration());
            modelBuilder.ApplyConfiguration(new InfoConfiguration());
        }
    }
}
