import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Constants } from '../../Constants';
import { Upcoming, Result, Games } from '../../model/gameTypeModel';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameType = '';
  betType: any;
  upcomingGames: Upcoming[] = [];
  results: Result[];
  gameResData: any[];
  gameResRaceData: any[] = [];
  blnUpcoming: boolean;
  blnResults: boolean;

  constructor(private http: HttpClient,
              private commonService: CommonService) { }

  ngOnInit() {}
  // To fetch the game entered
  searchGame() {
    this.initializeGameData();
    if (Constants.gameTypes.includes(this.gameType)) {
      this.commonService.getGameTypeData(this.gameType.toUpperCase()).subscribe((response: any) => {
        this.betType = response.betType;
        this.upcomingGames = response.upcoming;
        this.results = response.results;
        if (null != this.upcomingGames) {
          this.blnUpcoming = true;
          this.upcomingGames.forEach((upcoming: Upcoming) => {
            this.getGameData(upcoming.id);
          });
        }
        else if (null != this.results) {
          this.blnResults = true;
          this.results.forEach((results: Result) => {
            this.getGameData(results.id);
          });
        }
      });
    }
    else {
      alert('Enter a valid Game Type');
    }
  }

  // To fetch game data for each race
  getGameData(gameId: string) {
    this.commonService.getGameData(gameId).subscribe((response: any) => {
      this.gameResData.push(response);
      this.gameResRaceData.push(response.races);
    });
  }

  // To initialize/reset the game data
  initializeGameData(){
    this.upcomingGames = [];
    this.results = [];
    this.gameResData = [];
    this.gameResRaceData = [];
    this.blnUpcoming = false;
    this.blnResults = false;
  }
}
