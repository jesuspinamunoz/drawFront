import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { __exportStar } from 'tslib';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackConnService } from 'src/app/back-conn.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn:boolean = true; 

  constructor(private router:Router, private service: BackConnService) { }
  ngOnInit(): void {

    this.service.isLoggedSubject.subscribe((isLogged) => {
      setTimeout(() => {
        this.isLoggedIn = isLogged;
      }, 0);
    });
  }

  ngOnDestroy() {
    this.service.isLoggedSubject.unsubscribe();
  }
}
