using Microsoft.AspNetCore.Mvc;
using MockApi.Model.SafeSearch;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace MockApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SafeSearchController : ControllerBase
    {
        private readonly ILogger<SafeSearchController> _logger;
        private Random random = new Random();
        
        public SafeSearchController(ILogger<SafeSearchController> logger)
        {
            _logger = logger;
            //var requests = SafeSearchRequests.Generate(3);
            //JsonSerializerOptions options = new JsonSerializerOptions();
            //options.PropertyNameCaseInsensitive = true;
            //string json = JsonSerializer.Serialize<SafeSearchRequests>(requests, options);
        }

        [HttpPost]
        [Route("test:annotate")]
        public IActionResult PostTest()
        {
            return Ok($"Current date is {DateTime.Now.ToString("O")}");
        }

        [HttpPost]
        [Route("images:annotate")]
        [RequestSizeLimit(Int64.MaxValue)]
        public IActionResult PostImages(SafeSearchRequests safeSearchRequests)
        {
            if (safeSearchRequests == null)
                return BadRequest();

            if (safeSearchRequests.Requests == null || safeSearchRequests.Requests.Count == 0)
                return BadRequest();

            for (int i = 0; i < safeSearchRequests.Requests.Count; i++)
            {
                if (safeSearchRequests.Requests[i].Image == null)
                    return BadRequest();

                if (safeSearchRequests.Requests[i].Image.Content == null
                    || safeSearchRequests.Requests[i].Image.Content.Length == 0)
                    return BadRequest();

                if (safeSearchRequests.Requests[i].Features == null
                    || safeSearchRequests.Requests[i].Features.Count == 0)
                    return BadRequest();
            }

            var result = SafeSearchResponses.Generate(safeSearchRequests.Requests.Count);

            return Ok(result);
        }
    }
}
