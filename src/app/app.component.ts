import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/filter';

import { LocationStrategy, PlatformLocation, Location, DOCUMENT } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isAdminPage : Boolean;

    constructor(private location :Location){
    }
    ngOnInit(){
        
        this.isAdminPage =this.location.path().includes("admin")? true : false;
    }

}
