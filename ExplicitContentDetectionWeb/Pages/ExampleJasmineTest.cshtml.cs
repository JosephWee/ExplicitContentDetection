using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ExplicitContentDetection.Pages
{
    public class ExampleJasmineTestModel : PageModel
    {
        private readonly ILogger<ExampleJasmineTestModel> _logger;

        public ExampleJasmineTestModel(ILogger<ExampleJasmineTestModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
