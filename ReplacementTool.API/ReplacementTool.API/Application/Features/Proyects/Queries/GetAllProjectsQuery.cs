using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReplacementTool.API.Domain.Entities;
using ReplacementTool.API.Domain.Interfaces;

namespace ReplacementTool.API.Application.Features.Projects.Queries
{
    public class GetAllProjectsQuery : IRequest<IEnumerable<Project>>
    {
        public class GetAllProjectsQueryHandler : IRequestHandler<GetAllProjectsQuery, IEnumerable<Project>>
        {
            private readonly IProjectRepository _projectRepository;

            public GetAllProjectsQueryHandler(IProjectRepository projectRepository)
            {
                _projectRepository = projectRepository;
            }

            public async Task<IEnumerable<Project>> Handle(GetAllProjectsQuery request, CancellationToken cancellationToken)
            {
                return await _projectRepository.GetAllAsync();
            }
        }
    }
}
