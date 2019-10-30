import { Component, OnInit } from '@angular/core';
import { PostModel } from 'app/models/postModel';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'app/posts/post.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  postSelected: PostModel;
  otherposts: PostModel[];
  id: string;
  constructor(private route: ActivatedRoute, private postService: PostService) {

  }

  ngOnInit() {
    this.getPost()
    this.getPosts();
  }

  getPost(){
    this.id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPost(this.id).subscribe(post => this.postSelected = post);
  }

  getPosts() {
    return this.postService.getPosts();
  }

}
