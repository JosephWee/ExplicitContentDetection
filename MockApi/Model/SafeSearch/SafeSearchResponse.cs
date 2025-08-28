using System;
using System.Text.Json.Serialization;

namespace MockApi.Model.SafeSearch
{
    public class SafeSearchResponse
    {
        [JsonPropertyName("safeSearchAnnotation")]
        public SafeSearchAnnotation SafeSearchAnnotation { get; set; }

        public SafeSearchResponse()
        {
        }
    }
}
