import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  placeValue = '';
  fromInputDateValue= '';
  toInputDateValue = '';


  constructor() { }

  ngOnInit() {
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        debugger
        alert(`Geolocation is not supported by this browser. ${position}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
