import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

pages = [
 {
    title: 'Resume',
    url: '/menu/first'
},

{
  title: 'About',
  url: '/menu/second'
},

{
  title: 'Project',
  url: '/menu/third'
},

{
  title: 'Extra Curriculars',
  url: '/menu/fourth'
},

{
  title: 'Contact',
  url: '/menu/fifth'
}
];

selectedPath = '';

  constructor(private router: Router) {
  this.router.events.subscribe((event: RouterEvent) => {
    if (event && event.url) {
        this.selectedPath = event.url;
    }

  });

  }

  ngOnInit() {
  }

}
