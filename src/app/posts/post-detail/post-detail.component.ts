import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { PostModel } from 'app/Models/postModel';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postSelected: PostModel;
  otherposts: PostModel[];
  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit() {
    this.getPost()
    this.getPosts();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPost(id).subscribe(post => this.postSelected = post);
  
  }

  getPosts() {
    this.otherposts = this.postService.getPosts();
  }

}
