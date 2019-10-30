import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { PostService } from '../post.service';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { UploadService } from 'app/core/services/upload.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.scss']
})
export class PostCrudComponent implements OnInit {
  title: string;
  selectedFiles: FileList;
 
  content: string;
  description: string;
  tinymceInit: any;
  tinymce: any;

  
  constructor(private authService: AuthService, private postService: PostService, private uploadService : UploadService, private route: Router, public fb: FormGroup) { 

  }

  ngOnInit() {
    this.initTinymce();

    this.fb=new FormGroup({})
    
  }

  initTinymce(){
    this.tinymceInit = {
      plugins: 'image code link lists codesample fullscreens ',
      toolbar: 'undo redo | link image | code | numlist bullist | codesample ',
      height: 320,
      image_title: true,
      automatic_uploads: true,
      file_picker_types: 'image',
      file_picker_callback: function (cb, value, meta) {
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.onchange = function () {
        var file = input.files[0];
        var reader = new FileReader();
        reader.onload = function () {
          // var id = 'blobid' + (new Date()).getTime();
          // var blobCache =  this.tinymce.activeEditor.editorUpload.blobCache;
          // var base64 =  (reader.result as string).split(',')[1];
          // var blobInfo = blobCache.create(id, file, base64);
          // blobCache.add(blobInfo);
          // cb(blobInfo.blobUri(), { title: file.name });
        };
        reader.readAsDataURL(file);
      };

      input.click();
    }
    }
  }
  onSubmitPost(){}

  
  createPost(){
    const data = {
      author: this.authService.authState.displayName,
      description: this.description,
      content: this.content,
      image: this.uploadService.image,
      published: new Date(),
      title: this.title
    };
    this.postService.createPost(data);
    this.title="";
    this.description="";
    this.content="";
  }
  
   chooseFiles(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadService.uploadImage( this.selectedFiles);  
  }
 

}