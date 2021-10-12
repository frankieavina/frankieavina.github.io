import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  techs = ["HTML and CSS","Javascript (ES6+)",'Angular','Node.js (koa.ts and express.js)', 'MySQL and Mondo DB'];

  constructor() { }

  ngOnInit(): void {
  }

}
