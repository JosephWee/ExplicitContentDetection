using System.Text.Json.Serialization;

namespace MockApi.Model.SafeSearch
{
    public class SafeSearchAnnotation
    {
        [JsonIgnore]
        public Likelyhood Adult { get; set; }

        [JsonPropertyName("adult")]
        public string AdultString
        {
            get
            {
                return Adult.ToString();
            }
            init
            {
                Adult = ParseLikelyhood(value);
            }
        }

        [JsonIgnore]
        public Likelyhood Spoof { get; set; }

        [JsonPropertyName("spoof")]
        public string SpoofString
        {
            get
            {
                return Spoof.ToString();
            }
            init
            {
                Spoof = ParseLikelyhood(value);
            }
        }

        [JsonIgnore]
        public Likelyhood Medical { get; set; }

        [JsonPropertyName("medical")]
        public string MedicalString
        {
            get
            {
                return Medical.ToString();
            }
            init
            {
                Medical = ParseLikelyhood(value);
            }
        }

        [JsonIgnore]
        public Likelyhood Violence { get; set; }

        [JsonPropertyName("violence")]
        public string ViolenceString
        {
            get
            {
                return Violence.ToString();
            }
            init
            {
                Violence = ParseLikelyhood(value);
            }
        }

        [JsonIgnore]
        public Likelyhood Racy { get; set; }

        [JsonPropertyName("racy")]
        public string RacyString
        {
            get
            {
                return Racy.ToString();
            }
            init
            {
                Racy = ParseLikelyhood(value);
            }
        }

        protected Likelyhood ParseLikelyhood(string name)
        {
            Likelyhood _enum = Likelyhood.UNLIKELY;

            if (!Enum.TryParse(name, out _enum))
            {
                throw new InvalidDataException($"Unknown [{typeof(Likelyhood).Name}] value.");
            }

            return _enum;
        }

        public SafeSearchAnnotation()
        {
            Adult = Likelyhood.UNLIKELY;
            Spoof = Likelyhood.UNLIKELY;
            Medical = Likelyhood.UNLIKELY;
            Violence = Likelyhood.UNLIKELY;
            Racy = Likelyhood.UNLIKELY;
        }
    }
}
