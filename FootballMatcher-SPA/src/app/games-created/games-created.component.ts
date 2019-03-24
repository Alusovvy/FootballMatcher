import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { AlertifyService } from '../services/alertify.service';
import { Game } from '../models/game';
import { JwtHelperService } from '@auth0/angular-jwt';
import { delay } from 'q';

@Component({
  selector: 'app-games-created',
  templateUrl: './games-created.component.html',
  styleUrls: ['./games-created.component.css']
})
export class GamesCreatedComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  location: any;
  games: Game[];
  game: Game;
  constructor(private gameService: GameService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getCreatedGames(this.jwtHelper.decodeToken(localStorage.getItem('token')).nameid);
    console.log(this.games);
  }

  getCreatedGames(hostId: number) {
    this.gameService.getGame(hostId).subscribe((games: Game[]) => {
      this.games = games;
    }, error => {
      this.alertify.error(error);
    });
  }

  async deleteGame(id: any) {
    this.gameService.deleteGame(id).subscribe(() => {
      this.alertify.success('Game was deleted');
    }, error => {
      this.alertify.error(error);
    }
    );
    await delay(500);
    location.reload();
  }

  async updateGame(game) {
    console.log(game);
    this.gameService.editGame(game, 0).subscribe( () => {
      this.alertify.success('Game was edited');
    }, error => {
      this.alertify.error(error);
    });
    await delay(500);
    location.reload();
  }

 delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  }
