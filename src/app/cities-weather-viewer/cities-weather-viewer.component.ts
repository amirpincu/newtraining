import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cities-weather-viewer',
  templateUrl: './cities-weather-viewer.component.html',
  styleUrls: ['./cities-weather-viewer.component.css']
})
export class CitiesWeatherViewerComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({ cityName: new FormControl('cityName', [Validators.required]) });

  constructor() { }

  ngOnInit(): void {
  }

}
