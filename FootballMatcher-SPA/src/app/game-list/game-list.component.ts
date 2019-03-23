import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
import { AlertifyService } from '../services/alertify.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  location: any;
  games: Game[];
  userId: number;
  game: Game = {};
  
  constructor(private gameService: GameService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  findGame() {
    this.gameService.getGames(this.location).subscribe((games: Game[]) => {
      this.games = games;
    }, error => {
      this.alertify.error(error);
    });

  }

  joinGame(gameId: number) {
    console.log('pressed');
    console.log(gameId);
    this.userId = this.jwtHelper.decodeToken(localStorage.getItem('token')).nameid;
    this.game.id = gameId;
    this.gameService.editGame(this.game, this.userId).subscribe(() => {
      this.alertify.success('You joined the game');
    }, error => {
      this.alertify.error(error);
    });
  }

}
