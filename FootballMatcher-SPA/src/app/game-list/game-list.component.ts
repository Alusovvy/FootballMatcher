import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  location: any;
  gamesList: any;
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  findGame() {
    this.gamesList = this.gameService.getGameList(this.location);
    console.log(this.gamesList);
  }

}
