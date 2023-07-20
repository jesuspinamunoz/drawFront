import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nextmatchinfo',
  templateUrl: './nextmatchinfo.component.html',
  styleUrls: ['./nextmatchinfo.component.css']
})
export class NextmatchinfoComponent implements OnChanges {
  @Input() league: any;
  srcScript: string = "";

  ngOnChanges() {
    if (this.league) {
      this.srcScript = this.league.srcScript;
      const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
      iframe.src = this.srcScript;
    } 
  }
}
