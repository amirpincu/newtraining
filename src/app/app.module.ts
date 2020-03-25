import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CitiesWeatherViewerComponent } from './cities-weather-viewer/cities-weather-viewer.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms'; 

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'weather', component: CitiesWeatherViewerComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponent,
    CitiesWeatherViewerComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule, CommonModule,

    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule,
    FormGroup, FormControl,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
