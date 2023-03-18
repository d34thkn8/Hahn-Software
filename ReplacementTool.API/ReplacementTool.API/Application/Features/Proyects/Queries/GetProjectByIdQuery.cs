using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReplacementTool.API.Domain.Entities;
using ReplacementTool.API.Domain.Interfaces;

namespace ReplacementTool.API.Application.Features.Projects.Queries
{
    public class GetProjectByIdQuery : IRequest<Project>
    {
        public int Id { get; set; }

        public class GetProjectByIdQueryHandler : IRequestHandler<GetProjectByIdQuery, Project>
        {
            private readonly IProjectRepository _projectRepository;

            public GetProjectByIdQueryHandler(IProjectRepository projectRepository)
            {
                _projectRepository = projectRepository;
            }

            public async Task<Project> Handle(GetProjectByIdQuery request, CancellationToken cancellationToken)
            {
                return await _projectRepository.GetByIdAsync(request.Id);
            }
        }
    }
}
