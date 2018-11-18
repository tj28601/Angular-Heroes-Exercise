import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { MyplayerserviceService } from '../myplayerservice.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  // players: Player[]
    players: Player[] = [];

  constructor(private MyplayerserviceService: MyplayerserviceService) { }
  // players: Player[]
  // player: Observable<Player[]>

  ngOnInit() {
    // this.add()
  }

  add(name: string): void {

    name = name.trim();
    if (!name) { return; }
    this.MyplayerserviceService.addPlayer({ name } as Player)
      .subscribe( player => {
        this.players.push(player);
      
      });
  }

}
