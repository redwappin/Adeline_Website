import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { RouterModule , Routes } from '@angular/router';


const routes: Routes = [
 { path: 'blog', component: PostListComponent },
 { path: 'blog/:id', component: PostDetailComponent },

]

@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PostDashboardComponent],
  providers: [PostService]
})
export class PostsModule { }
