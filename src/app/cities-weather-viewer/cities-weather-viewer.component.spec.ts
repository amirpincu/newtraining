import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesWeatherViewerComponent } from './cities-weather-viewer.component';

describe('CitiesWeatherViewerComponent', () => {
  let component: CitiesWeatherViewerComponent;
  let fixture: ComponentFixture<CitiesWeatherViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesWeatherViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesWeatherViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
