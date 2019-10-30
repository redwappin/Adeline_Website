import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { PostService } from '../../post.service';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from "@angular/router";
import { UploadService } from 'app/core/services/upload.service';
import { PostModel } from 'app/models/postModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: '../post-crud.component.html',
  styleUrls: ['../post-crud.component.scss']
})
export class UpdateComponent implements OnInit {
  title: string;
  selectedFiles: FileList;
 
  content: string;
  description: string;
  tinymceInit: any;
  tinymce: any;
  id: string;

  postSelected: PostModel;
  constructor(private authService: AuthService,public fb: FormGroup ,private postService: PostService, private uploadService : UploadService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id'); 
    if(this.authService.authState== null){
      //this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.getPost();
    this.initPost();
  }

  getPost(){
      const id = this.route.snapshot.paramMap.get('id');
      return this.postService.getPost(id).subscribe(post => this.postSelected = post)
  }

  createPost(){
    
    const data = {
      author: this.authService.authState.displayName,
      description: this.description,
      content: this.content,
      image: this.uploadService.image,
      published: new Date(),
      title: this.title
    };
    this.title="";
    this.description="";
    this.content="";
  }

  onSubmitPost(){
    let post = new PostModel;
    post = this.fb.value;
    post.author = this.authService.authState.displayName;
    post.image = this.uploadService.image;
    post.published = new Date();
    this.postService.updatePost(this.id,post);
    console.log(post);
  }


  initPost() {
    this.fb = new FormGroup({
      description: new FormControl(this.postSelected.description, Validators.required),
      content: new FormControl(this.postSelected.content, Validators.required),
      title: new FormControl(this.postSelected.title, Validators.required),
    })
  }

  chooseFiles(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadService.uploadImage( this.selectedFiles);  
  }

}