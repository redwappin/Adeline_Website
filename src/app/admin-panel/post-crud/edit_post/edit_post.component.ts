import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from 'app/models/postModel';
import { PostService } from 'app/posts/post.service';
import { UploadService } from 'app/core/services/upload.service';
import { AuthService } from 'app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

declare let tinymce: any;
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit_post.component.html',
  styleUrls: ['../post-crud.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy{

  postForm : FormGroup;
  postSelected : PostModel;
  selectedFiles: FileList;
  id: string;
  sub : Subscription;
  tinymceInit: any;
  
  constructor( private postService: PostService, private uploadService: UploadService, private route : ActivatedRoute) { 
   
  }
   ngOnInit(){
    this.initTinymce();
    this.id = this.route.snapshot.paramMap.get('id');
    this.sub = this.postService.getPost(this.id).subscribe(post => {
      this.postSelected = post;
      this.initPost();
    }
     );
    
}


  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  initPost(){
    this.postForm = new FormGroup({
      description: new FormControl(this.postSelected.description, Validators.required),
      content: new FormControl(this.postSelected.content, Validators.required),
      title: new FormControl(this.postSelected.title, Validators.required),
    });
  }

  onSubmitPost(){
    let post = new PostModel;
    post = this.postForm.value;
    post.author = this.postSelected.author;
    if (post.image == null){
      post.image = this.postSelected.image;
    } else{
      post.image = this.uploadService.image;
    }
    post.published = this.postSelected.published;
    this.postService.updatePost(this.id , post);
    console.log(post);
  }

  chooseFiles(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0))
      this.uploadService.uploadImage( this.selectedFiles);  
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
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.onchange = function () {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function () {
          const id = 'blobid' + (new Date()).getTime();
          const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
          const base64 =  (reader.result as string).split(',')[1];
          const blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);
          cb(blobInfo.blobUri(), { title: file.name });
        };
        reader.readAsDataURL(file);
      };

      input.click();
    }
    }
  }

  }