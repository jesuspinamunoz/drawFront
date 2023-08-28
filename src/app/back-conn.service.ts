import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse   } from '@angular/common/http';
import {Subject} from 'rxjs';

const baseUrl = 'api/netincome/';
const SELECTEDSEASON = 'api/netIncomeSelectedYear/';
const UpdateCSVUrl = 'api/UpdateCSVs/';
const UPDATESELECTEDNDRAWS = 'api/UpdateSelectedNDraws/';
const UPDATEBETINLEAGUE = 'api/UpdateBetInLeague/';
const LOGIN = 'api/login/';
const LOGOUT = 'api/logout/';
const MAINSUMMARY = "api/mainSummary/";
const LEAGUESUMMARY = "api/leagueSummary/";
const ALERTEDLEAGUES = "api/alertedLeagues/";
const ACTIVEBETLEAGUES = "api/activeBetLeagues/";
const TIPSTERMODE = "api/tipsterMode/";
const NAVBARINFO = "api/navBarInfo/";
const LEAGUENAMES = "api/leagueNames/";
const INFOBETS = "api/infoBets/";
const INFOBETFORM = "api/singleInfoBet/";
const BETTINGSHOPS = "api/bettingShops/";
const BETTINGSHOPDATA = "api/bettingShopData/";
const USERCONFIGURATIONDATA = "api/userConfigurationData/";



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
    return this.http.get<any>(SELECTEDSEASON + seasonLeague, { headers });
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
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get<any>(UPDATESELECTEDNDRAWS + league + "/" + newNDraws, { headers });
  }

  UpdateBetInLeague(league: string, betInLeague: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get<any>(UPDATEBETINLEAGUE + league + "/" + betInLeague, { headers });
  }

  activateBettingShop(_bettingShop:string, _activate:boolean) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    const bettingShopInfo = {
      bettingShopName: _bettingShop,
      activate: _activate
    };

    return this.http.put<any>(BETTINGSHOPS + "/", bettingShopInfo, { headers });
  }

  login(_username: string, _password: string){
    const loginData = {
      username: _username,
      password: _password
    };
    return this.http.post<LoginResponse>(LOGIN, loginData);                                                                     
  }

  setLoggedIn(value: boolean): void {
    this.isLogged = value;
    this.isLoggedSubject.next(value);
  }

  getLoggedIn(): boolean {
    return this.isLogged;
  }

  logout(_accessToken: string)
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = {}
    return this.http.post<any>(LOGOUT, {headers}).subscribe(response => { });
  }


  getBettingShopInfo(_bettingShopName: string)
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(BETTINGSHOPDATA + _bettingShopName + "/", { headers });
  }

  // updateMyPersonalData(_username: string, _password: string, _startbettingmoney: string, _telegramHash: string, _objetivo:number)
  // {
  //   const personalDataToUpdate = {
  //     username: _username,
  //     password: _password,
  //     startbettingmoney: _startbettingmoney,
  //     telegramHash: _telegramHash,
  //     objetivo: _objetivo,
  //   };
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  //   return this.http.post<any>(WINAMAXDATA, personalDataToUpdate, { headers } );
  // }

  getAlertedLeagues()
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(ALERTEDLEAGUES, { headers });
  }

  getActiveBetLeagues() 
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(ACTIVEBETLEAGUES, { headers });
  }
  
  getTipsterMode() 
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(TIPSTERMODE, { headers });
  }

  getNavBarInfo() 
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(NAVBARINFO, { headers });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getleagueNames()
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(LEAGUENAMES, { headers });
  }

  
  getInfoBets()
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(INFOBETS, { headers });
  }

  getInfoBetForm(_id:string)
  {
    console.log(_id)
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(INFOBETFORM + _id + "/", { headers });
  }
  
  updateInfoBetForm(_betId:string ,_league:string, _netMoney:string, _odd:number, _moneyBet:number, _status:string, _cashOut:number)
  {
    const inforBetFormToUpdate = {
      league: _league,
      netMoney : _netMoney,
      odd: _odd,
      moneyBet: _moneyBet,
      status: _status,
      cashOut: _cashOut,
    };

    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<any>(INFOBETFORM + _betId + "/",  inforBetFormToUpdate, { headers });
  }

  addInfoBetForm(_league:string, _odd:number, _moneyBet:number, _status:string, _cashOut:number)
  {
    const inforBetFormToUpdate = {
      league: _league,
      odd: _odd,
      moneyBet: _moneyBet,
      status: _status,
      cashOut: _cashOut,
    };

    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post<any>(INFOBETFORM + "0/",  inforBetFormToUpdate, { headers });
  }

  deleteBet(_betId:string)
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete<any>(INFOBETFORM + _betId + "/", { headers });
  }

  getBettingShops()
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(BETTINGSHOPS, { headers });
  }

  getUserConfigurationData()
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(USERCONFIGURATIONDATA, { headers });
  }
  setUserConfigurationData(_startbettingmoney:number, _telegramHash:string, _objetivo:number)
  {
    const userConfiguration = {
      startbettingmoney: _startbettingmoney,
      telegramHash: _telegramHash,
      objetivo: _objetivo,
    };
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<any>(USERCONFIGURATIONDATA, userConfiguration, { headers });
  }

  

}
