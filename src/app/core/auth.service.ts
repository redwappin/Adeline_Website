import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {auth} from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(data => this.authState = data)
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }
}
