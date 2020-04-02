import { Component, OnInit } from '@angular/core';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.css']
})
export class NewsBlogComponent implements OnInit {

  posts: Observable<any[]>;

  ngOnInit() {
  }

  constructor(public db: AngularFireDatabase) {
    this.posts = db.list('posts').valueChanges();
  }


}
