using System.Text.Json.Serialization;

namespace MockApi.Model.SafeSearch
{
    public class SafeSearchFeature
    {
        [JsonPropertyName("type")]
        public string FeatureType
        {
            get
            {
                return "SAFE_SEARCH_DETECTION";
            }
            set
            {
            }
        }
        
        public SafeSearchFeature()
        {
        }
    }
}
