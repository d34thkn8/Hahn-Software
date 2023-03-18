namespace ReplacementTool.API.Domain.Entities
{
    public class Project
    {
        public int Id { get; set; }
        public string Description { get; set; }=string.Empty;
        public List<Info> InfoList { get; set; }=new List<Info>(); 
    }
}
