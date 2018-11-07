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
  response: any;

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

  }
// }
  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }
