import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from 'app/Models/postModel';
import { Observable } from 'rxjs';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: PostModel[];
  constructor(private postService: PostService, public authService: AuthService) { }

  ngOnInit() {
     this.posts = this.postService.getPosts();
  }

  delete(id : string){
    this.postService.deletePost(id);
  }

}
