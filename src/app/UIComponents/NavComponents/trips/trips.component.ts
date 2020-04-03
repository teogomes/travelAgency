import { Component, OnInit ,  } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { TripData } from 'src/app/user';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  filter: string;
  private sub: any;
  private sub2: any;
  trips: TripData[] = [];
  filteredTrips: TripData[] = [];
  loaded = false


  constructor(private route: ActivatedRoute,private router: Router, public db: AngularFireDatabase) {
  
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.filter = params["filter"]
        this.filterTrips()
    })

    this.sub2 = this.db.list('trips').valueChanges().subscribe((res: [TripData]) => {
      this.trips = res
      this.filterTrips()
    });

  }

  filterTrips() {
    if (this.trips.length > 0 && this.filter) {
      this.filteredTrips = this.trips
        .filter((trip) => {
          return trip.type == this.filter
        })
    }
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
    // this.sub2.unsubscribe();
  }
}
