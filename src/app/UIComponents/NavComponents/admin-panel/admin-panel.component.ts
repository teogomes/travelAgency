import { Component, OnInit } from '@angular/core';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {
  messages: Observable<any[]>

  ngOnInit() {

  }

  constructor(public db: AngularFireDatabase) {
    this.messages = db.list('contactFormMessages').valueChanges()
  }

  answer(item: any) {

    let message = "Hello " + item.contactFormName + ".Thank you for your email "
      window.open("mailto:"+ item.contactFormEmail + "?subject=" + "Reply to your message:: " + item.contactFormMessage +"&body="+ message ,"_self");
  
  }

}
