import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { PostService } from '../../post.service';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { UploadService } from 'app/core/services/upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from 'app/models/postModel';

@Component({
  selector: 'app-add',
  templateUrl: '../post-crud.component.html',
  styleUrls: ['../post-crud.component.scss']
})
export class AddComponent implements OnInit {
  title: string;
  selectedFiles: FileList;

  tinymceInit: any;
  tinymce: any;

  
  constructor(private authService: AuthService, private postService: PostService,public fb: FormGroup, private uploadService: UploadService) { 

    if(this.authService.authState== null){
      //this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.initPost();
  }


  initPost(){
    this.fb = new FormGroup({
      description: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
    });
  }

  onSubmitPost(){
    let post = new PostModel;
    post = this.fb.value;
    post.author = this.authService.authState.displayName;
    post.image = this.uploadService.image;
    post.published = new Date();
    this.postService.createPost(post);
    console.log(post);
  }

  chooseFiles(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadService.uploadImage( this.selectedFiles);  
  }


}