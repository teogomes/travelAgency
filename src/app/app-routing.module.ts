import { NgModule } from '@angular/core';
import {Routes , RouterModule, Router} from '@angular/router';
import {AboutComponent} from './UIComponents/NavComponents/about/about.component'
import {HomeComponent} from './UIComponents/NavComponents/home/home.component';
import {AdminPanelComponent} from './UIComponents/NavComponents/admin-panel/admin-panel.component';
import {NewsBlogComponent} from './UIComponents/NavComponents/news-blog/news-blog.component';
import {ContactComponent} from './UIComponents/NavComponents/contact/contact.component';
import {BookingComponent} from './UIComponents/NavComponents/booking/booking.component';
import {DetailsPageComponent} from './UIComponents/NavComponents/details-page/details-page.component';
import {HotelsComponent} from './UIComponents/NavComponents/hotels/hotels.component';
import { TripsComponent } from './UIComponents/NavComponents/trips/trips.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'newsBlog', component:NewsBlogComponent},
  {path: 'hotels' , component:HotelsComponent},
  {path: 'trips' , component:TripsComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'adminPanel', component:AdminPanelComponent},
  {path: 'booking' , component:BookingComponent},
  {path: 'detailsPage' , component:DetailsPageComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
