import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-navbar',
  templateUrl: './phone-navbar.component.html',
  styleUrls: ['./phone-navbar.component.css']
})
export class PhoneNavbarComponent implements OnInit {
  showNav = false;

  constructor() { }

  ngOnInit(): void {
  }

  openResume(){
    const pdfUrl = './assets/web-developer-francisco-avina.pdf';
    window.open(pdfUrl, '_blank','',true);
  }

}
