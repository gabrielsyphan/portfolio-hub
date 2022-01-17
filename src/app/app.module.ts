import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { CardsComponent } from './cards/cards/cards.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ErrorComponent } from './error/error/error.component';
import { ApiRequestComponent } from './apiRequest/api-request/api-request.component';
import { TextToSpeechComponent } from './textToSpeech/text-to-speech/text-to-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    ProfileComponent,
    ErrorComponent,
    ApiRequestComponent,
    TextToSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
