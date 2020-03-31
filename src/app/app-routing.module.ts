import { NgModule } from '@angular/core';
import {Routes , RouterModule, Router} from '@angular/router';
import {AboutComponent} from './Components/about/about.component'
import {HomeComponent} from './Components/home/home.component';
import {AdminPanelComponent} from './Components/admin-panel/admin-panel.component';
import {NewsBlogComponent} from './Components/news-blog/news-blog.component';
import {ContactComponent} from './Components/contact/contact.component';
import {BookingComponent} from './Components/booking/booking.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'newsBlog', component:NewsBlogComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'adminPanel', component:AdminPanelComponent},
  {path: 'booking' , component:BookingComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
