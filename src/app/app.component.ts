import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taylor\'s Heroes';
  userName: string = "";
  playaz: any;
  apts: any;
  resp: any;
  response: any;
  res: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.Players()
    this.Articles()
  }

  Articles() {
    this.http.get('https://www.stellarbiotechnologies.com/media/press-releases/json?')
    .subscribe((Kosovo) => {
      this.resp = Kosovo;
      console.log(this.resp.news);
    })
  }
  Players () {
    this.http.get('http://localhost:3000/api/v1/players')
    .subscribe((Albania) => {
      this.response = Albania;
      console.log(this.response.players);
    })
  }
  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.res = response;
      console.log(this.res);
    })
  }
}
