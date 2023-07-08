import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetitas',
  templateUrl: './tarjetitas.component.html',
  styleUrls: ['./tarjetitas.component.css']
})
export class TarjetitasComponent implements OnInit {

  @Input() value: any; 
  @Input() text: any; 
  
  constructor() { }

  ngOnInit(): void {   
  }

  ngOnChanges() {
  }

  






}
