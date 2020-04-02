import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Observable<any[]>;

 constructor(public db: AngularFireDatabase) {
    this.hotels = db.list('hotels').valueChanges();
  }

  ngOnInit() {
  }


}
