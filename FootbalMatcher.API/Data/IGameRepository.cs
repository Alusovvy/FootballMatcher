using System.Collections.Generic;
using System.Threading.Tasks;
using FootbalMatcher.API.Models;

namespace FootbalMatcher.API.Data
{
    public interface IGameRepository
    {
         Task<Game> CreateGame(Game game);
         Task<Game> EditGame(Game game);
         Task<Game> DeleteGame(int id);
         Task<IEnumerable<Game>> GetGames(string location);
         Task<Game> JoinGame(int userId, int gameId);

         Task<IEnumerable<Game>> GetGame(int id);
    }
}