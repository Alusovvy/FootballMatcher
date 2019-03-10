import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl = 'http://localhost:5000/api/auth/';
constructor(private http: HttpClient) { }

getGameList(location: any) {
  return this.http.post(this.baseUrl + 'games', location);
}

}
