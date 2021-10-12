import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-about',
  templateUrl: './phone-about.component.html',
  styleUrls: ['./phone-about.component.css']
})
export class PhoneAboutComponent implements OnInit {
  techs = ["HTML and CSS","Javascript (ES6+)",'Angular','Node.js (koa.ts and express.js)', 'MySQL and Mondo DB'];

  constructor() { }

  ngOnInit(): void {
  }

}
