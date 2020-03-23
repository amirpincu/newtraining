import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesWeatherViewerComponentComponent } from './cities-weather-viewer-component.component';

describe('CitiesWeatherViewerComponentComponent', () => {
  let component: CitiesWeatherViewerComponentComponent;
  let fixture: ComponentFixture<CitiesWeatherViewerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesWeatherViewerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesWeatherViewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
