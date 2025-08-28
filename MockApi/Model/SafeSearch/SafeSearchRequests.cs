using System;
using System.Text.Json.Serialization;

namespace MockApi.Model.SafeSearch
{
    public class SafeSearchRequests
    {
        [JsonPropertyName("requests")]
        public List<SafeSearchRequest> Requests { get; set; }

        public static SafeSearchRequests Generate(int requestCount)
        {
            var requests = new SafeSearchRequests();
            var random = new Random();

            for (int i = 0; i < requestCount; i++)
            {
                int contentLength = random.Next(1, 5) * 1024;
                Image image = new Image();
                image.Content = new byte[contentLength];
                for (int b = 0; b < image.Content.Length; b++)
                {
                    image.Content[b] = Convert.ToByte(b % 128);
                }

                SafeSearchRequest safeSearchRequest = new SafeSearchRequest()
                {
                    Image = image,
                    Features = new List<SafeSearchFeature>()
                    {
                       new SafeSearchFeature()
                    }
                };

                requests.Requests.Add(safeSearchRequest);
            }

            return requests;
        }

        public SafeSearchRequests()
        {
            Requests = new List<SafeSearchRequest>();
        }
    }
}
