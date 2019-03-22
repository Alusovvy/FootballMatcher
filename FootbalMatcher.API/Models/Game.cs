using System;
using System.Collections.Generic;

namespace FootbalMatcher.API.Models
{
    public class Game
    {
        public int Id { get; set; }
        public int HostId { get; set; }
        public string Name { get; set; }
        public string HostName { get; set; }
        public string Location { get; set; }    
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public int Slots { get; set; }
        public List<User> Participants { get; set; }

        public Game()
        {
            this.Participants = new List<User>();
        }
    }   
}