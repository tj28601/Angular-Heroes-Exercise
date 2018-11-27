import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class MyplayerserviceService {

    private playersUrl = '//localhost:3000/api/v1/players'; //URL to web api
    // player: ""
    // player: Player[] = [];
    // localStorage: Player[] = [];

//     let player: Player = { name: 'Quentin Thomas' };
//
// this.localStorage.setItem('player', player).subscribe(() => {});

  constructor(private http: HttpClient, private localStorage: LocalStorage) { }
ngOnInit() {

  let player: Player = { name: '', id: 0 };
   this.localStorage.setItem('player', player).subscribe(() => {});
   console.log(player);
   debugger
}
  // let player: Player = { name: 'Quentin Thomas' };

// this.localStorage.setItem(player).subscribe(() => {});

  getMyPlayers(offset: number) {
    return this.http.get('http://localhost:3000/api/v1/players?limit=10&offset='+offset);
  }
  /** POST: add a new hero to the server */
  addPlayer (player: Player): Observable<Player> {
// debugger;
    return this.http.post<Player>(this.playersUrl, player, httpOptions).pipe(
      tap(_ => console.log(`just added ${player.name}`)),
      catchError(this.handleError<Player>('addPlayer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
