import {Component, OnInit} from '@angular/core';
import {AppService} from '../shared/app.service';
import {Subscription} from 'rxjs';
import {Info} from '../shared/Interfaces';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.less']
})
export class CityPageComponent implements OnInit {
  pSub: Subscription;
  infoUser: Info = {
    ip: '',
    city: '',
    country: '',
    loc: '',
    org: '',
    postal: '',
    timezone: ''
  };
  articleWiki = {};
  Object = Object;

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    this.pSub = this.appService.getInfoUser().subscribe(res => {
      this.infoUser = res;
    });
    this.pSub = this.appService.getInfoWiki().subscribe(res => {
      const pages = res.query.allpages
      for (let p in pages) {
        this.pSub = this.appService.getInfoWikiById(pages[p].pageid).subscribe(res => {
          const item = res.query.pages;
          const keys = Object.keys(item)
          this.articleWiki[item[keys[0]].title] = item[keys[0]].extract
        })
      }
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}
