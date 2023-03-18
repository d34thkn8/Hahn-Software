using ReplacementTool.API.Domain.Entities;

namespace ReplacementTool.API.Domain.Interfaces
{
    public interface IProjectRepository
    {
        Task<Project> GetByIdAsync(int id);
        Task<IEnumerable<Project>> GetAllAsync();
        Task<Project> AddAsync(Project project);
        Task<Project> UpdateAsync(Project project);
        Task DeleteAsync(int id);
    }
}
