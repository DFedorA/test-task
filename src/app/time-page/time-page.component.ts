import {Component} from '@angular/core';

@Component({
  selector: 'app-time-page',
  templateUrl: './time-page.component.html',
  styleUrls: ['./time-page.component.less']
})
export class TimePageComponent {
  CurrentTime: any;

  constructor() {
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    }, 1);
  }
}
