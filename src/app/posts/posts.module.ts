import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { RouterModule , Routes } from '@angular/router';
import { PostCrudComponent } from './post-crud/post-crud.component';
import { NgxMdModule } from 'ngx-md';


const routes: Routes = [
 { path: 'blog', component: PostListComponent },
 { path: 'blog/:id', component: PostDetailComponent },
 { path: 'crud', component: PostCrudComponent}
]

@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent, PostCrudComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxMdModule.forRoot(),
  ],
  exports: [PostDashboardComponent],
  providers: [PostService]
})
export class PostsModule { }
