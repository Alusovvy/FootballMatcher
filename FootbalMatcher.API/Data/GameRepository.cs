using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FootbalMatcher.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FootbalMatcher.API.Data
{
    public class GameRepository : IGameRepository
    {
        private readonly DataContext _context;
        public GameRepository(DataContext context)
        {
            _context = context;

        }

        public async Task<Game> CreateGame(Game game)
        {
           await _context.Games.AddAsync(game);
           await _context.SaveChangesAsync();

            return game;

        }

        public async Task<Game> DeleteGame(int id)
        {
            var game = await _context.Games.FirstOrDefaultAsync(x => x.Id == id);
             _context.Games.Remove(game);
             await _context.SaveChangesAsync();

            return game;
        }

        public async Task<Game> EditGame(Game game, int userId)
        {
            if(userId > 0) {
            var gameToEdit = await _context.Games.FirstOrDefaultAsync(x => x.Id == game.Id);
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == userId);
            gameToEdit.Participants.Add(user);
            await _context.SaveChangesAsync();
            game = gameToEdit;

            } else {
            _context.Games.Update(game);
           await _context.SaveChangesAsync();
            }


           return game;

        }

        public async Task<IEnumerable<Game>> GetGames(string location)
        {
          var game = await  _context.Games.Include("Participants").Where(x => x.Location == location).ToListAsync();
         
            return game;
        }

        public async Task<IEnumerable<Game>> GetGame(int id)
        {
            var game = await _context.Games.Include("Participants").Where(x => x.HostId == id).ToListAsync();

            return game;
        }

    }
}