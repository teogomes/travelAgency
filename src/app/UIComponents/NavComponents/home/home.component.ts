import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable } from 'rxjs';
import { SlideshowImage, TravelPackage } from 'src/app/Models';



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
  items: TravelPackage[] = [];
  imageUrls: String[];
  slideshowImages: Observable<any[]>;
  itemsSub: any;
  slideshowSub: any;


  ngOnInit() {

  }

  constructor(public db: AngularFireDatabase) {
    const firebaseUser = JSON.parse(localStorage.getItem('firebaseUser'));
    
    this.itemsSub = db.list('items').valueChanges().subscribe((res: TravelPackage[]) => {
      
      // this.items = res
      this.items = res.filter((travelPackage:TravelPackage) => {
        if (firebaseUser) {
          return this.showPackage(firebaseUser.age || 18, travelPackage)
        }
        return true
      })
    })



    this.slideshowSub = db.list('slideshowImages').valueChanges().subscribe((res: SlideshowImage[]) => {
      this.imageUrls = []
      res.map((image) => {
        this.imageUrls.push(image.imageUrl)
      })
    })
  }

  showPackage(userAge: number, travelPackage:TravelPackage):boolean {
    return userAge >= travelPackage.minAge && userAge <= travelPackage.maxAge 
  }


  ngOnDestroy() {
    this.itemsSub.unsubscribe()
    this.slideshowSub.unsubscribe()
  }

}
