import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable } from 'rxjs';

interface SlideshowImage {
  urlSlideshowPhoto:String,
  urlLink:String,

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  //Slideshow variables
  height: string = '400px';
  minHeight: string = "425px";
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  enableZoom: boolean = false;
  enablePan: boolean = false;

  ngOnInit() {
  }

  items: Observable<any[]>;
  imageUrls: String[];
  slideshowImages: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
    db.list('slideshowImages').valueChanges().subscribe((res : SlideshowImage[]) => {
      this.imageUrls = []
      res.map((image) => {
        this.imageUrls.push(image.urlSlideshowPhoto)
      })
    })

  }

  myFunction() {
    console.log(this.slideshowImages)
  }

}
