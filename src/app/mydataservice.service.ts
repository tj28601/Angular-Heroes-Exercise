import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MydataserviceService {

  constructor(private http: HttpClient) { }

  getMyArticles(offset: number)
  {
    return this.http.get('https://www.stellarbiotechnologies.com/media/press-releases/json?limit=10&offset='+offset);
  }
}
