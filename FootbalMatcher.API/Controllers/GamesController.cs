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

        public async Task<IActionResult> CreateGame(Game game, int userId)
        {
            game.Location = game.Location.ToLower();
            game.HostId = userId;
            await _game.CreateGame(game);

            return Ok(game);
        }

        [HttpPost("{id}")]

        public IActionResult DeleteGame(int id) 
        {
            // await _game.DeleteGame(id);


            return Ok();
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditGame(Game game, int id)
        {
            game.Id = id;
            await _game.EditGame(game);

            return Ok(game);
        }

        [HttpGet]

        public async Task<IActionResult> GetGames(Game game) 
        {
            if (game.Location == null)
                return NotFound();
            game.Location = game.Location.ToLower();
            var games = await _game.GetGames(game.Location);

            return Ok(games);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> GetGame(int id) {
            
            var game = await _game.GetGame(id);

            return Ok(game);
        }
    }
}