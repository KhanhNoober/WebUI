import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebUI';

  items = [
    { title : 'Home', icon : 'home',  link: '/home'},
    { title : 'Shop', icon : 'info-outline',  link: '/shop'}
  ]
}
