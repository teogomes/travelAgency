import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.trips = db.list('trips').valueChanges();
  }

  ngOnInit() {}

}
