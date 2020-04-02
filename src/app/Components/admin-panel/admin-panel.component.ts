import { Component, OnInit } from '@angular/core';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {


  itemValue = '';
  urlPhoto = '';
  titlePhoto = '';
  subtitleValue = '';
  messageValue = '';
  urlSlideshowPhoto = '';
  urlLink = '';
  postTitle = '';
  postMessage = '';
  postPhotoUrl = '';
  hotelTitle = '';
  hotelMessage = '';
  hotelPhotoUrl = '';
  hotelUrl = '';
  tripTitle = '';
  tripMessage = '';
  tripPhotoUrl = '';
  tripUrl = '';
  tripType = 'roadTrip';
  items: Observable<any[]>;
  slideShowImages: Observable<any[]>;
  posts: Observable<any[]>;
  hotels: Observable<any[]>;
  showAlert = false;

  ngOnInit() {

  }

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
    this.slideShowImages = db.list('slideshowImages').valueChanges();
    this.posts = db.list('posts').valueChanges();
    this.hotels = db.list('hotels').valueChanges();
  }

  postToFirebase(values,pathName) {
    if (pathName) {
      this.db.list(pathName).push(values).then((res) => {
        this.db.object(`${pathName}/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
      })
      this.successAndResetFields()
    }
  }

  successAndResetFields() {
    this.itemValue = '';
    this.urlPhoto = '';
    this.subtitleValue = '';
    this.messageValue = '';
    this.urlSlideshowPhoto = '';
    this.urlLink = '';
    this.showAlert = true;
    this.postTitle = '';
    this.postMessage = '';
    this.postPhotoUrl = '';
    this.hotelTitle = '';
    this.hotelMessage = '';
    this.hotelPhotoUrl = '';
    this.hotelUrl = '';
    this.tripTitle = '';
    this.tripMessage = '';
    this.tripPhotoUrl = '';
    this.tripUrl = '';
    this.tripType = '';

  }

  removeItem(item: any, path: string) { this.db.object(`${path}/${item.ID}`).remove() }

}
