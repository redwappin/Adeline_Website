import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostsModule } from '../posts/posts.module';

import { HomeComponent } from './home.component';

import { ProfileComponent } from '../profile/profile.component';
import { ContactComponent } from '../contact/contact.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { SkillsComponent } from '../skills/skills.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        PostsModule,
    ],
    declarations: [ HomeComponent, ProfileComponent, ContactComponent, TimelineComponent, SkillsComponent],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
