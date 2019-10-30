import { Routes, Router } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { LoginComponent } from 'app/login/login.component';
import { AddPostComponent } from './post-crud/add_post/add_post.component';
import { EditPostComponent } from './post-crud/edit_post/edit_post.component';




export const AdminRoutes: Routes = [
    { path: 'admin', component: AdminPanelComponent,
      children : [
        { path: '', redirectTo: 'add', pathMatch: 'full' },
        { path: 'add', component: AddPostComponent },
        { path: 'edit/:id', component: EditPostComponent }
      ]
    },
    { path: 'login', component: LoginComponent },
  ];


