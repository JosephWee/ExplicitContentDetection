using System.Text.Json.Serialization;

namespace MockApi.Model.SafeSearch
{
    public class Image
    {
        [JsonIgnore]
        public byte[] Content { get; set; }

        [JsonPropertyName("content")]
        public string ContentBase64Encoded
        {
            get
            {
                return Convert.ToBase64String(Content);
            }
            init
            {
                byte[] bytes = Convert.FromBase64String(value);
                Content = bytes;
            }
        }

        public Image()
        {
        }
    }
}
