import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostModel } from 'app/models/postModel';
import { PostService } from 'app/posts/post.service';
import { UploadService } from 'app/core/services/upload.service';
import { AuthService } from 'app/core/services/auth.service';

declare let tinymce: any;
@Component({
  selector: 'app-add-post',
  templateUrl: './add_post.component.html',
  styleUrls: ['../post-crud.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm : FormGroup;
  selectedFiles: FileList;
  tinymceInit:any;
  
  constructor( private postService: PostService, private uploadService: UploadService, private authService : AuthService) { 
  }

  ngOnInit(){
    this.initPost()
    this.initTinymce();
  }
 

  initPost(){
    this.postForm = new FormGroup({
      description: new FormControl(''),
      content: new FormControl(''),
      title: new FormControl('')
    });
  }

  onSubmitPost(){
    let post = new PostModel;
    post = this.postForm.value;
    post.author = this.authService.authState.displayName;
    post.image = this.uploadService.image;
    post.published = new Date();
    this.postService.createPost(post);
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
      width : 800,
      height : 1000,
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
