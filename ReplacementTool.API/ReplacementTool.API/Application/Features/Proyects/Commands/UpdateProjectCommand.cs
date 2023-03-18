using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReplacementTool.API.Domain.Entities;
using ReplacementTool.API.Domain.Interfaces;

namespace ReplacementTool.API.Application.Features.Projects.Commands
{
    public class UpdateProjectCommand : IRequest<Project>
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public List<Info> InfoList { get; set; }

        public class UpdateProjectCommandHandler : IRequestHandler<UpdateProjectCommand, Project>
        {
            private readonly IProjectRepository _projectRepository;

            public UpdateProjectCommandHandler(IProjectRepository projectRepository)
            {
                _projectRepository = projectRepository;
            }

            public async Task<Project> Handle(UpdateProjectCommand request, CancellationToken cancellationToken)
            {
                var project = await _projectRepository.GetByIdAsync(request.Id);
                if (project == null)
                {
                    return null;
                }

                project.Description = request.Description;
                project.InfoList = request.InfoList;

                return await _projectRepository.UpdateAsync(project);
            }
        }
    }
}
