import { NgModule } from '@angular/core';
import {Routes , RouterModule, Router} from '@angular/router';
import {AboutComponent} from './Components/about/about.component'
import {HomeComponent} from './Components/home/home.component';
import {AdminPanelComponent} from './Components/admin-panel/admin-panel.component';
import {NewsBlogComponent} from './Components/news-blog/news-blog.component';
import {ContactComponent} from './Components/contact/contact.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'newsBlog', component:NewsBlogComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'adminPanel', component:AdminPanelComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
