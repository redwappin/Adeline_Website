import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { auth } from 'firebase';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private route : Router) { }

  ngOnInit() {
  }

  login() {
    this.authservice.login();   
    this.route.navigate(['admin/add']);
  }

}
