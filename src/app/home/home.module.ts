import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostsModule } from '../posts/posts.module';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';

import { ProfileComponent } from '../profile/profile.component';
import { ContactComponent } from '../contact/contact.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { SkillsComponent } from '../skills/skills.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        PostsModule,
        SharedModule
    ],
    declarations: [ HomeComponent, ProfileComponent, ContactComponent, TimelineComponent, SkillsComponent],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
