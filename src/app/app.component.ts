import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MydataserviceService } from './mydataservice.service';
import { Articles, ArticlesObj } from './_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MydataserviceService]
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
  offset: number = 0;


  constructor(private http: HttpClient, private service: MydataserviceService) { }

  ngOnInit() {
    this.Players();
    // this.Articles();
    this.getArticles();
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
    console.log("Scrolled");
    this.offset = this.offset + 10;
    this.getArticles();
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
