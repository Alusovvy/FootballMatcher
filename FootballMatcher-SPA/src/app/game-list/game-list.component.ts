import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  location: any;
  games: Game[];
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

}
