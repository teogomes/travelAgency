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

  addNewTravelPackage() {
    this.db.list('items').push({ title: this.itemValue, subtitle: this.subtitleValue, message: this.messageValue, imageUrl: this.urlPhoto }).then((res) => {
      this.db.object(`items/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
    })
    this.successAndResetFields()
  }

  addNewSlideshowImage() {
    this.db.list('slideshowImages').push({ imageUrl: this.urlSlideshowPhoto, urlLink: this.urlLink, titlePhoto: this.titlePhoto }).then((res) => {
      this.db.object(`slideshowImages/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
    })
    this.successAndResetFields()
  }

  addNewPost() {
    this.db.list('posts').push({ title:this.postTitle, message: this.postMessage , imageUrl:this.postPhotoUrl }).then((res) => {
      this.db.object(`posts/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
    })
    this.successAndResetFields()
  }

  addNewHotel() {
    this.db.list('hotels').push({ title:this.hotelTitle, message: this.hotelMessage , imageUrl:this.hotelPhotoUrl,url:this.hotelUrl }).then((res) => {
      this.db.object(`hotels/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
    })
    this.successAndResetFields()
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
  }

  removeItem(item:any,path:string) {this.db.object(`${path}/${item.ID}`).remove()}

}
