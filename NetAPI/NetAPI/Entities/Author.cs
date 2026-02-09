using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace NetAPI.Entities
{
    public class Author
    {
        public int Id {get; set;}
        [Required]
        [StringLength(150)]
        public required string Name {get; set;}
        public DateTime BirthDate {get; set;}
        [Unicode(false)]
        public string? Photo {get; set;}
    }
}