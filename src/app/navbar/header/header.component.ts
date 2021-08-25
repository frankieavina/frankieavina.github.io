import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  openResume(){
    const pdfUrl = './assets/web-developer-francisco-avina.pdf';
    window.open(pdfUrl, '_blank','',true);
  }

  // downloadPdf() {
  //   const pdfUrl = './assets/web-developer-francisco-avina.pdf';
  //   const pdfName = 'Frankies Resume';
  //   FileSaver.saveAs(pdfUrl, pdfName);
  // }


}
