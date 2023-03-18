namespace ReplacementTool.API.Domain.Entities
{
    public class Info
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public string ValueX { get; set; }=string.Empty;
        public string ValueY { get; set; } = string.Empty;
    }
}
