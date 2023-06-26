import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse   } from '@angular/common/http';
import { Observable, throwError, Subject  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const baseUrl = 'api/netincome/';
const baseUrlSeason = 'api/netIncomeSelectedYear/';
const UpdateCSVUrl = 'api/UpdateCSVs/';
const UpdateSelectedNDraws = 'api/UpdateSelectedNDraws/';
const LOGIN = 'api/login/';
const LOGOUT = 'api/logout/';
const PERSONALDATA = 'api/myPersonalData/';

const MAINSUMMARY = "api/mainSummary/";

const LEAGUESUMMARY = "api/leagueSummary/";


interface LoginResponse {
  responseStatus: string;
  access_token: string;
  userId: string;
  // Otros campos de la respuesta si los hay
}

@Injectable({
  providedIn: 'root'
})
export class BackConnService {
  constructor(private http: HttpClient) { }

  isLogged : boolean = false;
  isLoggedSubject: Subject<boolean> = new Subject<boolean>();
  accessToken : string = "";
  userId: string = "";
  authorizedUser: boolean = false;

  

  getMainSummary() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(MAINSUMMARY, { headers });
  }

  getLeagueSummary(_leagueName: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(LEAGUESUMMARY + _leagueName + "/", { headers });
  }

  getIncomeValues() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(baseUrl, { headers });
  }
  netIncomeSelectedYear(seasonLeague: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(baseUrlSeason + seasonLeague, { headers });
  }
  UpdateCSVs(_accessToken: string) {
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
      this.getIncomeValues();
      window.location.reload();
    });
  }

  UpdateLeagueNDraws(league: string, newNDraws: string) {
    this.http.get<any>(UpdateSelectedNDraws + league + "/" + newNDraws).subscribe(response => { });
  }

  login(_username: string, _password: string){
    const loginData = {
      username: _username,
      password: _password
    };
    // this.http.post<LoginResponse>(LOGIN, loginData).subscribe(response => { 
    //                                                                         this.accessToken = response.access_token;
    //                                                                         this.setLoggedIn(response.responseStatus === '200');
    //                                                                         this.authorizedUser = response.responseStatus === '200'
    //                                                                       });
    return this.http.post<LoginResponse>(LOGIN, loginData);                                                                     
  }

  setLoggedIn(value: boolean): void {
    this.isLogged = value;
    this.isLoggedSubject.next(value); // Emitir el nuevo valor
  }

  logout(_accessToken: string)
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = {}
    return this.http.post<any>(LOGOUT, {headers}).subscribe(response => { });
  }

  getMyPersonalData()
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(PERSONALDATA, { headers });
  }

  getAccessToken() {
    return this.accessToken;
  }
}
