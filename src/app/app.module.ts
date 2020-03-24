import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityWeatherComponentComponent } from './city-weather-component/city-weather-component.component';
import { CitiesWeatherViewerComponentComponent } from './cities-weather-viewer-component/cities-weather-viewer-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponentComponent },
  { path: 'weather', component: CitiesWeatherViewerComponentComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponentComponent,
    CitiesWeatherViewerComponentComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
