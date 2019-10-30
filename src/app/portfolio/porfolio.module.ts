import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsModule } from '../posts/posts.module';
import { HttpModule } from '@angular/http';

import { SharedModule } from 'app/shared/shared.module';
import { PostListComponent } from 'app/posts/post-list/post-list.component';
import { ViewComponent } from 'app/posts/post-crud/view/view.component';

const routes: Routes = [
    { path: '', 
    children: [
     { path: '', component: PostListComponent },
     { path: ':id', component: ViewComponent}
    ]}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpModule,
        PostsModule,
        SharedModule
    ],
    providers: []
})
export class PortfolioModule { }
