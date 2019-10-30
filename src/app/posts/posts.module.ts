import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { RouterModule , Routes } from '@angular/router';
import { PostCrudComponent } from './post-crud/post-crud.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SanitizeHtmlPipe } from '../core/Pipe/sanitizeHtmlPipe.pipe';
import { ViewComponent } from './post-crud/view/view.component';
import { AddComponent } from './post-crud/add/add.component';
import { UpdateComponent } from './post-crud/update/update.component';



const routes: Routes = [
 { path: 'blog', component: PostListComponent },
 { path: 'blog/:id', component: ViewComponent }
]

@NgModule({
  declarations: [PostDashboardComponent, ViewComponent, PostListComponent, PostCrudComponent, SanitizeHtmlPipe, UpdateComponent,AddComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EditorModule,
  ],
  exports: [PostDashboardComponent, SanitizeHtmlPipe],
  providers: [PostService]
})
export class PostsModule { }
