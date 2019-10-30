import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'nav', 
  outlet: 'nav',
  component: NavbarComponent},
  { path: 'foot', 
  outlet:'footer',
  component: FooterComponent },
 ];

@NgModule({
  
  declarations: [NavbarComponent , FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [NavbarComponent , FooterComponent]
})
export class SharedModule { }
