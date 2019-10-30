import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/posts/post.service';
import { UploadService } from 'app/core/services/upload.service';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.scss']
})
export class PostCrudComponent implements OnInit {
  mode: String;
  tinymceInit: any;
  tinymce: any;
  constructor(private postService: PostService, private uploadService: UploadService) {
    this.mode = this.postService.mode;
   }

  ngOnInit() {
  }




}
