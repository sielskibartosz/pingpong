import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './models/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = 'http://localhost:4201/api';

  constructor(private http: HttpClient) { }

  createPlayer(payload: Player): Observable<any> 
  {
    return this.http.post<Player>(`${this.apiUrl}/player`, payload);
  }

}
