import { ApiRequestComponent } from './apiRequest/api-request/api-request.component';
import { TextToSpeechComponent } from './textToSpeech/text-to-speech/text-to-speech.component';
import { ErrorComponent } from './error/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: HomeComponent},
  {path: 'apiRequest', component: ApiRequestComponent},
  {path: 'textToSpeech', component: TextToSpeechComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
