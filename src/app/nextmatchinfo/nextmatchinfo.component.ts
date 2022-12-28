import { Component, OnInit, Input, OnChanges, Renderer2, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-nextmatchinfo',
  templateUrl: './nextmatchinfo.component.html',
  styleUrls: ['./nextmatchinfo.component.css']
})
export class NextmatchinfoComponent implements OnInit {
  @Input() league: any;
  srcScript: string = "";
  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    const s = this.renderer2.createElement('iframe');
    s.src = this.league.srcScript;
    s.width = 520;
    s.height = 350;
    s.scrolling="no";
    document.getElementsByTagName('p')[0].appendChild(s);

    
  }

  ngOnChanges() {
    this.srcScript = this.league.srcScript; 
    // create a new node
    const s = this.renderer2.createElement('iframe');
    const fixture = document.getElementsByTagName('iframe');
    s.src = this.league.srcScript;
    s.width = 520;
    s.height = 350;
    s.scrolling="yes";
    fixture[0].replaceWith(s);    
    
    
  }

}
