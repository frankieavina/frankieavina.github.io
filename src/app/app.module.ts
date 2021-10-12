import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navbar/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './projects/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoadingComponent } from './loading/loading.component';
import { PhoneFooterComponent } from './phone-footer/phone-footer.component';
import { PhoneAboutComponent } from './phone-about/phone-about.component';
import { PhoneContactPageComponent } from './phone-contact/phone-contact-page.component';
import { PhoneExperienceComponent } from './phone-experience/phone-experience.component';
import { PhoneLandingComponent } from './phone-landing/phone-landing.component';
import { PhoneNavbarComponent } from './phone-navbar/phone-navbar.component';
import { PhoneProjectsComponent } from './phone-projects/phone-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    WorkComponent,
    LandingComponent,
    FooterComponent,
    LoadingComponent,
    PhoneFooterComponent,
    PhoneAboutComponent,
    PhoneContactPageComponent,
    PhoneExperienceComponent,
    PhoneLandingComponent,
    PhoneNavbarComponent,
    PhoneProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
