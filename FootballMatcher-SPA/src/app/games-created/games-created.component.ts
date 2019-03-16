import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { AlertifyService } from '../services/alertify.service';
import { Game } from '../models/game';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-games-created',
  templateUrl: './games-created.component.html',
  styleUrls: ['./games-created.component.css']
})
export class GamesCreatedComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  location: any;
  games: Game[];
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
  }
