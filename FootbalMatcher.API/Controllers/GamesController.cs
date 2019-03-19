using System.Threading.Tasks;
using FootbalMatcher.API.Data;
using FootbalMatcher.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FootbalMatcher.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IGameRepository _game;
        public GamesController(IGameRepository game)
        {
            _game = game;

        }

        [HttpPost]

        public async Task<IActionResult> CreateGame(Game game)
        {
            game.Location = game.Location.ToLower();
            await _game.CreateGame(game);

            return Ok(game);
        }


        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteGame(int id) 
        {
            await _game.DeleteGame(id);


            return Ok();
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditGame(Game game, int id)
        {
            game.Id = id;
            await _game.EditGame(game);

            return Ok(game);
        }

        [HttpGet("{location}")]

        public async Task<IActionResult> GetGames(string location) 
        {
            var isNumeric = int.TryParse(location, out int id);
            if(isNumeric) {
        
             var createdGames = await _game.GetGame(id);

             return Ok(createdGames);
            } else {

            Game game = new Game();
            game.Location = location;
            if (game.Location == null)
                return NotFound();
            game.Location = game.Location.ToLower();
            var games = await _game.GetGames(game.Location);

            return Ok(games);

            }

        }
    }
}