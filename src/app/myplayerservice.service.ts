import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MyplayerserviceService {

  constructor(private http: HttpClient) { }

  getMyPlayers(offset: number)
  {
    return this.http.get('http://localhost:3000/api/v1/players?limit=10&offset='+offset);
  }
}
