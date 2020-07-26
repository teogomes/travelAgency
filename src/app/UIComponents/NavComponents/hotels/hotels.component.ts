import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable } from 'rxjs';
import { HotelData } from 'src/app/Models';
import { debug } from 'util';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: HotelData[] = []
  allHotels: HotelData[] = []
  searchInput = '';

  constructor(public db: AngularFireDatabase) {
    db.list('hotels').valueChanges().subscribe((res: HotelData[]) => {
      this.allHotels = res
      this.hotels = res
    })
  }

  ngOnInit() {
  }

  searchChanged() {
    this.hotels = this.allHotels.filter((hotel: HotelData) => {   
      if (this.searchInput != '') {
        return hotel.destination.toLowerCase().includes(this.searchInput)
      }
      return true
    })
    debugger
  }

}
