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
import { NavComponent } from './UIComponents/nav/nav.component';
import { AboutComponent } from './UIComponents/NavComponents/about/about.component';
import { HomeComponent } from './UIComponents/NavComponents/home/home.component';
import { AdminPanelComponent } from './UIComponents/NavComponents/admin-panel/admin-panel.component';
import { SigninComponent } from './UIComponents/NavComponents/signin/signin.component';
import { NewsBlogComponent } from './UIComponents/NavComponents/news-blog/news-blog.component';
import { ContactComponent } from './UIComponents/NavComponents/contact/contact.component';
import { BookingComponent } from './UIComponents/NavComponents/booking/booking.component';
import { DetailsPageComponent } from './UIComponents/NavComponents/details-page/details-page.component';
import { HotelsComponent } from './UIComponents/NavComponents/hotels/hotels.component';
import { TripsComponent } from './UIComponents/NavComponents/trips/trips.component';
import { AdminPanelCellComponent } from './UIComponents/admin-panel-cell/admin-panel-cell.component';


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
    AdminPanelCellComponent,
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
