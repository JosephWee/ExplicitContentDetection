using System;
using System.Text.Json.Serialization;

namespace MockApi.Model.SafeSearch
{
    public class SafeSearchResponses
    {
        [JsonPropertyName("responses")]
        public List<SafeSearchResponse> Responses { get; set; }

        public static SafeSearchResponses Generate(int responseCount)
        {
            var responses = new SafeSearchResponses();
            var random = new Random();

            for (int i = 0; i < responseCount; i++)
            {
                SafeSearchResponse safeSearchResponse = new SafeSearchResponse()
                {
                    SafeSearchAnnotation = new SafeSearchAnnotation()
                    {
                        Adult = (Likelyhood)random.Next(4),
                        Spoof = (Likelyhood)random.Next(4),
                        Medical = (Likelyhood)random.Next(4),
                        Violence = (Likelyhood)random.Next(4),
                        Racy = (Likelyhood)random.Next(4)
                    }
                };

                responses.Responses.Add(safeSearchResponse);
            }

            return responses;
        }

        public SafeSearchResponses()
        {
            Responses = new List<SafeSearchResponse>();
        }
    }
}
