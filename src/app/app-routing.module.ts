import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {CityPageComponent} from "./city-page/city-page.component";
import {TimePageComponent} from "./time-page/time-page.component";
import {WeatherPageComponent} from "./weather-page/weather-page.component";
import {LayoutMainComponent} from "./shared/components/layout-main/layout-main.component";

const routes: Routes = [
  {
    path: '', component: LayoutMainComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'city', component: CityPageComponent},
      {path: 'time', component: TimePageComponent},
      {path: 'weather', component: WeatherPageComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
