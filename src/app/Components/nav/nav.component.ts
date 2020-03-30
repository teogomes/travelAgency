import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit {
  showLogin = true
  baseUrl = 'https://google.com/'
  searchBarText = ''
  constructor() { }

  ngOnInit() {
  }

  showAdminPanel(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user)
      return user.email == 'tptls@hotmail.com'
    else
      return false
  }

  searchForHotels() {
    fetch("https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=new%20york", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "a16e0a5d88msh291cdac33c53f8fp10546djsn504c1c452458"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  myFunction() {
    this.showLogin = !this.showLogin
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
