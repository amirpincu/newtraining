import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityWeatherComponentComponent } from './city-weather-component/city-weather-component.component';
import { CitiesWeatherViewerComponentComponent } from './cities-weather-viewer-component/cities-weather-viewer-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponentComponent,
    CitiesWeatherViewerComponentComponent,
    WelcomeComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
