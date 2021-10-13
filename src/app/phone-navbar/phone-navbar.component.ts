import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-navbar',
  templateUrl: './phone-navbar.component.html',
  styleUrls: ['./phone-navbar.component.css']
})
export class PhoneNavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  openResume(){
    console.log('Pressed Button')
    const pdfUrl = './assets/web-developer-francisco-avina.pdf';
    window.open(pdfUrl, '_blank','',true);
  }

}
