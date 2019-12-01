import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }



  ngOnInit() {
  }


/*
 * signout function to be called in the login page  --Ehab Feroze - 1601796*/

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
}
