import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { BlogComponent } from '../blog/blog.component';
import { ProfileComponent } from '../profile/profile.component';
import { ContactComponent } from '../contact/contact.component';
import { TimelineComponent } from '../timeline/timeline.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
    ],
    declarations: [ HomeComponent, BlogComponent, ProfileComponent, ContactComponent,TimelineComponent],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
