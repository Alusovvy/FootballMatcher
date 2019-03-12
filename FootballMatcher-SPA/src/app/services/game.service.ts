import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../models/game';


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
}


