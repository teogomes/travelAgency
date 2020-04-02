import { Component, OnInit, Input } from '@angular/core';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-panel-cell',
  templateUrl: './admin-panel-cell.component.html',
  styleUrls: ['./admin-panel-cell.component.css']
})
export class AdminPanelCellComponent implements OnInit {

  @Input() key: string;
  @Input() pathName: string;
  @Input() tripTypes: [string];
  @Input() cardTitle: string;

  // firebaseValues=['packages':'{ title: this.titleValue, subtitle: this.subtitleValue, message: this.messageValue, imageUrl: this.urlPhoto }',


  titleValue = '';
  subtitleValue = '';
  messageValue = '';
  urlPhoto = '';
  urlLink = '';
  tripType = 'roadTrip';
  showAlert = false;

  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.items = this.db.list(this.pathName).valueChanges();
  }

  postToFirebase() {
    let firebaseValues = {
      packages: {title: this.titleValue, subtitle: this.subtitleValue, message: this.messageValue, imageUrl: this.urlPhoto},
      slideshowImages: {imageUrl: this.urlPhoto, urlLink: this.urlLink, titlePhoto: this.urlPhoto},
      posts: { title: this.titleValue, message: this.messageValue, imageUrl: this.urlPhoto },
      hotels: { title: this.titleValue, message: this.messageValue, imageUrl: this.urlPhoto, url:  this.urlLink },
      trips: { title: this.titleValue, message: this.messageValue , imageUrl: this.urlPhoto,type:this.tripType},
    }
    
    if (this.pathName) {
      this.db.list(this.pathName).push(firebaseValues[this.key]).then((res) => {
        this.db.object(`${this.pathName}/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
      })
      this.successAndResetFields()
    }
  }

  successAndResetFields() {
    this.titleValue = '';
    this.urlPhoto = '';
    this.subtitleValue = '';
    this.messageValue = '';
    this.showAlert = true;
  }

  removeItem(item: any) { this.db.object(`${this.pathName}/${item.ID}`).remove() }

}