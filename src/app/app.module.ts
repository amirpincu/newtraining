import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CitiesWeatherViewerComponent } from './cities-weather-viewer/cities-weather-viewer.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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

    MatButtonModule, MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
