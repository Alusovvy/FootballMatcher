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

        public async Task<Game> EditGame(Game game)
        {
           _context.Games.Update(game);
           await _context.SaveChangesAsync();

           return game;

        }

        public async Task<IEnumerable<Game>> GetGames(string location)
        {
          var game = await  _context.Games.Where(x => x.Location == location).ToListAsync();
         
            return game;
        }

        public async Task<IEnumerable<Game>> GetGame(int id)
        {
            var game = await _context.Games.Where(x => x.HostId == id).ToListAsync();

            return game;
        }

        public async Task<Game> JoinGame(int userId, int gameId)
        {
            var game = await _context.Games.FirstOrDefaultAsync(x => x.Id == gameId);
            var participant = await _context.Users.FirstOrDefaultAsync(x => x.Id == userId);
            game.Participants.Add(participant);
            await _context.SaveChangesAsync();

            return game;
        }

    }
}