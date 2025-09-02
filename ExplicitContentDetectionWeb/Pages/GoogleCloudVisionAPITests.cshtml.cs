using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ExplicitContentDetection.Pages
{
    public class GoogleCloudVisionAPITestsModel : PageModel
    {
        private readonly ILogger<GoogleCloudVisionAPITestsModel> _logger;

        public GoogleCloudVisionAPITestsModel(ILogger<GoogleCloudVisionAPITestsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
