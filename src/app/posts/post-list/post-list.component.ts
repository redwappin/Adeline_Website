import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from 'app/models/postModel';
import { Observable } from 'rxjs';
import { AuthService } from 'app/core/services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: PostModel[];
  constructor(private postService: PostService, public authService: AuthService, private router: Router) { }

  ngOnInit() {
     this.posts = this.postService.getPosts();
  }

  delete(id : string){
    this.postService.deletePost(id);
  }

  editPage(id: string){
    this.postService.mode = 'update';
    this.router.navigate(['blog/edit/', id]);
  }

}
