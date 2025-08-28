using System.Text.Json.Serialization;

namespace MockApi.Model.SafeSearch
{
    public class SafeSearchRequest
    {
        [JsonPropertyName("image")]
        public Image Image { get; set; }

        [JsonPropertyName("features")]
        public List<SafeSearchFeature> Features { get; set; }

        public SafeSearchRequest()
        {
            Features = new List<SafeSearchFeature>();
        }
    }
}
