import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ChallengesComponent,
    AwardsComponent,
    ScheduleComponent,
    SubscribeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
