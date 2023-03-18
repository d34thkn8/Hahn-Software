using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ReplacementTool.API.Domain.Entities;

namespace ReplacementTool.API.Infrastructure.Persistence.Configurations
{
    public class InfoConfiguration : IEntityTypeConfiguration<Info>
    {
        public void Configure(EntityTypeBuilder<Info> builder)
        {
            builder.HasKey(i => i.Id);

            builder.Property(i => i.ProjectId)
                .IsRequired();

            builder.Property(i => i.ValueX)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(i => i.ValueY)
                .IsRequired()
                .HasMaxLength(255);
        }
    }
}
