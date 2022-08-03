import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tabs = [
    {
      title: 'News',
      route: '/home/news',
      icon: 'home',
    },
    {
      title: 'About',
      route: '/home/about',
      icon: 'info',
    }
  ];

}
