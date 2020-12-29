import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  gameTypeAPI = 'https://www.atg.se/services/racinginfo/v1/api/products/';
  gameIdAPI = 'https://www.atg.se/services/racinginfo/v1/api/games/';

  constructor(private http: HttpClient) { }

  getGameTypeData(gameType: string) {
    return this.http.get(this.gameTypeAPI + gameType)
      .pipe(catchError(this.handleError));
  }

  getGameData(gameId: string) {
    return this.http.get(this.gameIdAPI + gameId)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error.message || 'Server Error ');
  }
}



