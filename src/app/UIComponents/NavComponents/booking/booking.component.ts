import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  placeValue = '';
  fromInputDateValue = '';
  toInputDateValue = '';
  items: Observable<any[]>;
  hotelsTab = false


  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges()
  }

  ngOnInit() {
  }

  segmentChanged(path: string) {
    this.hotelsTab = path == 'hotels'
    this.items = this.db.list(path).valueChanges()
  }

  resetFields() {
    this.fromInputDateValue = '';
    this.toInputDateValue = '';

    if(!this.isLoggedIn()) { 
      window.alert("Please first sign in")
    }else {
      window.alert("Your booking has been submited")
    }
    

  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null
  }

}
