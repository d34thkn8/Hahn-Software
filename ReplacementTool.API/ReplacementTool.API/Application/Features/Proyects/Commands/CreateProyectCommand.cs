using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReplacementTool.API.Domain.Entities;
using ReplacementTool.API.Domain.Interfaces;

namespace ReplacementTool.API.Application.Features.Projects.Commands
{
    public class CreateProjectCommand : IRequest<Project>
    {
        public string Description { get; set; }
        public List<Info> InfoList { get; set; }

        public class CreateProjectCommandHandler : IRequestHandler<CreateProjectCommand, Project>
        {
            private readonly IProjectRepository _projectRepository;

            public CreateProjectCommandHandler(IProjectRepository projectRepository)
            {
                _projectRepository = projectRepository;
            }

            public async Task<Project> Handle(CreateProjectCommand request, CancellationToken cancellationToken)
            {
                var project = new Project
                {
                    Description = request.Description,
                    InfoList = request.InfoList
                };

                return await _projectRepository.AddAsync(project);
            }
        }
    }
}
