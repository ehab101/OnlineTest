import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

pages = [
 {
    title: 'Personal profile',
    url: '/menu/first'
},

{
  title: 'Personal project',
  url: '/menu/second'
},

{
  title: 'Team Project',
  url: '/menu/third'
},

{
  title: 'Extra Curriculars',
  url: '/menu/fourth'
},

{
  title: 'Technical Skills',
  url: '/menu/seventh'
},

{
  title: 'Soft Skills',
  url: '/menu/sixth'
},

{
  title: 'Contact',
  url: '/menu/fifth'
}
];

selectedPath = '';

  constructor(private router: Router, public afAuth: AngularFireAuth) {
  this.router.events.subscribe((event: RouterEvent) => {
    if (event && event.url) {
        this.selectedPath = event.url;
    }

  });

  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

  ngOnInit() {
  }

}
