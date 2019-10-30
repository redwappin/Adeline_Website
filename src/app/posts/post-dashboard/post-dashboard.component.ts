import { Component, OnInit } from '@angular/core';
import { PostModel } from 'app/models/postModel';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  posts: PostModel[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
