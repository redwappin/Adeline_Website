import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module'
import { AdminPanelModule } from './admin-panel/admin-panel.module';

import { environment } from 'environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    PostsModule,
    SharedModule,
    AdminPanelModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
