import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { JwtHelperService } from '@auth0/angular-jwt';


const httpOption = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getGames(location): Observable<Game[]> {
  return this.http.get<Game[]>(this.baseUrl + 'games/' + location, httpOption);

}

createGames(game: Game) {
  return  this.http.post(this.baseUrl + 'games', game, httpOption);

}

getGame(hostid): Observable<Game[]> {
  return this.http.get<Game[]>(this.baseUrl + 'games/' + hostid, httpOption);
}
deleteGame(id) {

  return this.http.delete(this.baseUrl + 'games/' + id, httpOption);
}
editGame(gameId, userId) {
  return this.http.put(this.baseUrl + 'games/' + userId, gameId, httpOption);
}

}



