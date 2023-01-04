import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const baseUrl = 'api/netincome/';
const baseUrlSeason = 'api/netIncomeSelectedYear/';
const UpdateCSVUrl = 'api/UpdateCSVs/';
const UpdateSelectedNDraws = 'api/UpdateSelectedNDraws/';

@Injectable({
  providedIn: 'root'
})
export class BackConnService {
  constructor(private http: HttpClient) { }

  arr: string[] = [];
  arrn: number[] = [];
  NDarr: string[] = [];
  NDarrn: number[] = [];
  dwendx: string[] = [];
  dwendy: number[] = [];
  martingala: number[] = [];
  newRequest: boolean = false;
  selectedTeam = '';
  pk: string = "";
  getIncomeValues(season: string) {
    return this.http.get<any>(baseUrl + season);
  }
  netIncomeSelectedYear(seasonLeague: string) {
    return this.http.get<any>(baseUrlSeason + seasonLeague);
  }
  getArr() {
    return this.arr;
  }
  getArrn() {
    return this.arrn;
  }
  getNDArr() {
    return this.NDarr;
  }
  getNDArrn() {
    return this.NDarrn;
  }
  getDWEndX() {
    return this.dwendx;
  }
  getDWEndY() {
    return this.dwendy;
  }

  getMartingala() {
    return this.martingala;
  }

  UpdateCSVs() {
    this.http.get<any>(UpdateCSVUrl).subscribe(response => {
      const el = document.getElementById('loader');
      const hole = document.getElementById('holeModal');
      if ((el != null) && (hole != null)) {
        // ✅ Shows element if hidden
        el.style.display = 'none';
        // ✅ Shows element if hidden
        hole.style.opacity = "1";
        hole.style.filter = "grayscale(0)";
      }
      this.getIncomeValues("2022-2023/SP1");
      window.location.reload();

    });
  }

  UpdateLeagueNDraws(league: string, newNDraws: string) {
    this.http.get<any>(UpdateSelectedNDraws + league + "/" + newNDraws).subscribe(response => { });
  }
}
