using FluentValidation;
using ReplacementTool.API.Application.Features.Projects.Commands;

namespace ReplacementTool.API.Application.Validators
{
    public class CreateProjectCommandValidator : AbstractValidator<CreateProjectCommand>
    {
        public CreateProjectCommandValidator()
        {
            RuleFor(p => p.Description)
                .NotEmpty().WithMessage("Description is required.")
                .MinimumLength(1).WithMessage("Description must be at least 1 character long.");
            RuleForEach(p => p.InfoList)
            .ChildRules(info =>
            {
                info.RuleFor(i => i.ValueX)
                    .NotEmpty().WithMessage("ValueX is required.")
                    .MinimumLength(1).WithMessage("ValueX must be at least 1 character long.");
            });

        }
    }
}
