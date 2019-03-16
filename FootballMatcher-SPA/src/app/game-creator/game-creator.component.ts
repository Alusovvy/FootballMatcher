import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenKey } from '@angular/core/src/view';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { GameService } from '../services/game.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-game-creator',
  templateUrl: './game-creator.component.html',
  styleUrls: ['./game-creator.component.css']
})
export class GameCreatorComponent implements OnInit {
model: any = {};
jwtHelper = new JwtHelperService();
  constructor(private gameService: GameService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  createGame() {
    this.model.hostId = this.jwtHelper.decodeToken(localStorage.getItem('token')).nameid;
    this.model.hostName = this.jwtHelper.decodeToken(localStorage.getItem('token')).unique_name;
    this.gameService.createGames(this.model).subscribe(() => {
      this.alertify.success('Game was created!');
    }, error => {
      this.alertify.error(error);
    });

  }

}
