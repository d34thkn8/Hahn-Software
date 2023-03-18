using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReplacementTool.API.Domain.Interfaces;

namespace MyApi.Application.Features.Projects.Commands
{
    public class DeleteProjectCommand : IRequest<Unit>
    {
        public int Id { get; set; }

        public class DeleteProjectCommandHandler : IRequestHandler<DeleteProjectCommand, Unit>
        {
            private readonly IProjectRepository _projectRepository;

            public DeleteProjectCommandHandler(IProjectRepository projectRepository)
            {
                _projectRepository = projectRepository;
            }

            public async Task<Unit> Handle(DeleteProjectCommand request, CancellationToken cancellationToken)
            {
                await _projectRepository.DeleteAsync(request.Id);
                return Unit.Value;
            }
        }
    }
}
