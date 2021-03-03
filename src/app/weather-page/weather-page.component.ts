import {Component, OnInit} from '@angular/core';
import {AppService} from "../shared/app.service";
import {Subscription} from "rxjs";
import {Info} from "../shared/Interfaces";

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.less']
})
export class WeatherPageComponent implements OnInit {
  pSub: Subscription;
  infoWeather = {};
  weatherCity: string;
  weatherForecast: number;
  weatherDesc: string;
  weatherIcon: string;
  Object = Object;
  infoUser: Info = {
    ip: '',
    city: '',
    country: '',
    loc: '',
    org: '',
    postal: '',
    timezone: ''
  };

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    this.pSub = this.appService.getInfoUser().subscribe(res => {
      this.infoUser = res;
      this.pSub = this.appService.getWeather(this.infoUser["city"]).subscribe(res => {
        this.weatherCity = res.name;
        this.weatherForecast = Math.round(res.main.temp - 273);
        this.weatherDesc = res.weather[0]['description'];
        this.weatherIcon = res.weather[0]['icon'];
        this.infoWeather = res;
      });
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
