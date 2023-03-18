using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyApi.Application.Features.Projects.Commands;
using ReplacementTool.API.Application.Features.Projects.Commands;
using ReplacementTool.API.Application.Features.Projects.Queries;
using ReplacementTool.API.Domain.Entities;

namespace ReplacementTool.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProjectsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            var projects = await _mediator.Send(new GetAllProjectsQuery());
            return Ok(projects);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            var project = await _mediator.Send(new GetProjectByIdQuery(id));

            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateProject(CreateProjectCommand command)
        {
            var projectId = await _mediator.Send(command);
            return Ok(projectId);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProject(int id, UpdateProjectCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            await _mediator.Send(command);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProject(int id)
        {
            await _mediator.Send(new DeleteProjectCommand(id));
            return NoContent();
        }
    }
}
