import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TimePageComponent } from './time-page/time-page.component';
import { CityPageComponent } from './city-page/city-page.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { LayoutHeaderComponent } from './shared/components/layout-header/layout-header.component';
import { LayoutMainComponent } from './shared/components/layout-main/layout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TimePageComponent,
    CityPageComponent,
    WeatherPageComponent,
    LayoutHeaderComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
