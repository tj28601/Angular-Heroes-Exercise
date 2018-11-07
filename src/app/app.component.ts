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
  playaz: Player[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // let obs = this.http.get('http://localhost:3000/api/v1/players');
        // let obs = this.http.get('http://localhost:3000/api/v1/players');

    //     this.http.get('http://api.github.com/users/koushikkothagal');
    // // .subscribe((response) => console.log(response));
    //
    // .subscribe((response) => {
    //   this.response = response;
    //   console.log(this.response);
    // })




this.Players()
    // this.http.get('http://localhost:3000/api/v1/players')
    // .subscribe((Albania) => {
    //   this.response = Albania;
    //   console.log(this.response.players);
    // })
    // this.http.get('https://www.stellarbiotechnologies.com/media/press-releases/json?')
    // .subscribe((Kosovo) => {
    //   this.resp = Kosovo;
    //   console.log(this.resp.news);
    // })
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
// }
  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.res = response;
      console.log(this.res);
    })
  }
