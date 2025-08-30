using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ExplicitContentDetection.Pages
{
    public class ExampleMochaTestModel : PageModel
    {
        private readonly ILogger<ExampleMochaTestModel> _logger;

        public ExampleMochaTestModel(ILogger<ExampleMochaTestModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
