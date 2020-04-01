//Modules
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SlideshowModule } from 'ng-simple-slideshow';
//Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//Componenets
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminPanelComponent } from './Components/admin-panel/admin-panel.component';
import { SigninComponent } from './Components/signin/signin.component';
import { NewsBlogComponent } from './Components/news-blog/news-blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BookingComponent } from './Components/booking/booking.component';
import { DetailsPageComponent } from './Components/details-page/details-page.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { TripsComponent } from './Components/trips/trips.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    AdminPanelComponent,
    SigninComponent,
    NewsBlogComponent,
    ContactComponent,
    BookingComponent,
    DetailsPageComponent,
    HotelsComponent,
    TripsComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
