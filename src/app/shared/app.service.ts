import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  getInfoUser(): Observable<any> {
    return this.http.get(`/ipinfo.io/json?token=${environment.tokenIp}`);
  }

  getInfoWiki(): Observable<any> {
    return this.http.get(`/en.wikipedia.org/w/api.php?action=query&format=json&list=allpages&apfrom=samara&prop=categories`);
  }

  getInfoWikiById(id: number): Observable<any> {
    return this.http.get(`/en.wikipedia.org/w/api.php?action=query&format=json&pageids=${id}&prop=extracts&exintro&explaintext&redirects=1&indexpageids`);
  }

  getWeather(city: string): Observable<any> {
    return this.http.get(`/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.tokenWeather}`);
  }
}
