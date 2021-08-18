import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navbar/header/header.component';
import { AboutComponent } from './about-page/about/about.component';
import { ContactComponent } from './contact-page/contact/contact.component';
import { ExperienceComponent } from './experience-page/experience/experience.component';
import { WorkComponent } from './work-page/work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
