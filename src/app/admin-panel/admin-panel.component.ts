import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
//import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from 'app/models/postModel';
import { PostService } from 'app/posts/post.service';
import { UploadService } from 'app/core/services/upload.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  selectedFiles: FileList;
  tinymceInit: any;
  tinymce: any;

  constructor( private auth: AuthService, private router: Router, private postService: PostService, private authService: AuthService, private uploadService: UploadService) {
   }

  ngOnInit() {
    if (!this.auth.isUserLogged()) {
      console.log('No user connected');
      this.router.navigate(['/login']);
    }
     
  }


}
