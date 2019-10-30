import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

//Components
import { LoginComponent } from 'app/login/login.component';;
import { AdminPanelComponent } from './admin-panel.component';
import { PostCrudComponent } from './post-crud/post-crud.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddPostComponent } from './post-crud/add_post/add_post.component';

//Routes
import { AdminRoutes } from './admin-panel.routing';
import { EditPostComponent } from './post-crud/edit_post/edit_post.component';
import { FixedPluginComponent } from './shared/fixed-plugin/fixed-plugin.component';


@NgModule({
  declarations: [
    AdminPanelComponent, 
    AddPostComponent, 
    EditPostComponent ,
    LoginComponent, 
    PostCrudComponent, 
    SidebarComponent, FixedPluginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutes),
    EditorModule, 
  ],
  providers: []
})
export class AdminPanelModule { }
