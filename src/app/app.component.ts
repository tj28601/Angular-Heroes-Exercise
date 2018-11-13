import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MydataserviceService } from './mydataservice.service';
import { Articles, ArticlesObj } from './_modal';
import { Players, PlayersObj } from './_p_modal';
import { MyplayerserviceService } from './myplayerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyplayerserviceService, MydataserviceService]
})
export class AppComponent {
  title = 'Taylor\'s Heroes';
  userName: string = "";
  // playaz: any;
  // apts: any;
  // resp: any;
  response: any;
  res: any;
  myArticlesList: Articles[] = [];
  myPlayersList: Players[] = [];
  offset: number = 0;


  constructor(private http: HttpClient, private service: MydataserviceService, private service2: MyplayerserviceService ) { }

  ngOnInit() {
    // this.Players();

    this.getArticles();
    this.getPlayers();
  }

  // Articles() {
  //   this.http.get('https://www.stellarbiotechnologies.com/media/press-releases/json?')
  //   .subscribe((Kosovo) => {
  //     this.resp = Kosovo;
  //     console.log(this.resp.news);
  //   })
  // }

  getArticles() {
    console.log(this.offset);
    this.service.getMyArticles(this.offset).subscribe((res) => this.onSuccess(res));
  }

  getPlayers() {
    console.log(this.offset);
    this.service2.getMyPlayers(this.offset).subscribe((res) => this.onExito(res));
  }
  onExito(res) {
    console.log(res.players);
    if (res != undefined) {
      // this.myArticlesList = [];

      res.players.forEach(item => {
        this.myPlayersList.push(new PlayersObj(item));
      });
    }
  }
  onSuccess(res) {
    console.log(res.news);
    if (res != undefined) {
      // this.myArticlesList = [];

      res.news.forEach(item => {
        this.myArticlesList.push(new ArticlesObj(item));
      });
    }
  }

  onScroll() {
    // console.log("Scrolled");
    this.offset = this.offset + 10;
    this.getArticles();
    console.log("Scrolled!!!");
  }

  enScroll() {
    this.offset = this.offset + 10;
    this.getPlayers();
    console.log("se desplaza!!!")
  }

  // Players () {
  //   this.http.get('http://localhost:3000/api/v1/players')
  //   .subscribe((Albania) => {
  //     this.response = Albania;
  //     console.log(this.response.players);
  //   })
  // }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.res = response;
      console.log(this.res);
    })
  }
}
