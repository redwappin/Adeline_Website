import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UploadService } from './services/upload.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers:[
    { provide: FirestoreSettingsToken, useValue: {} },
    AuthService, 
    UploadService]
})
export class CoreModule { }
