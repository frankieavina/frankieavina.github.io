import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  screenHeight !: number;
  screenWidth !: number;
  desktopView !: boolean; 

  ngOnInit(): void {
  }

  constructor(){ this.getScreenSize(); }

  @HostListener('window:resize', ['$event'])
  getScreenSize(_event?: undefined) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log(this.screenWidth, this.screenHeight);

        if ( this.screenWidth > 990 ){
          this.desktopView = true; 
        }
        else{
          this.desktopView = false; 
        }
        
  }

  title = 'web-developer-portfolio';
}
