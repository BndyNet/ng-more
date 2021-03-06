import { Component } from '@angular/core';

import { ApiService } from './shared';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'http://bndy.net';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}
