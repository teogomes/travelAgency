import { Component, OnInit } from '@angular/core';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messages: Observable<any[]>;
  contactFormName = '';
  contactFormEmail = '';
  contactFormSubject = '';
  contactFormMessage = '';

  ngOnInit() {
  }

  constructor(public db: AngularFireDatabase) {
    this.messages = db.list('messages').valueChanges();
  }

  sendNewContactFormMessage() {
    this.db.list('contactFormMessages').push({ contactFormName: this.contactFormName, contactFormEmail: this.contactFormEmail, contactFormSubject: this.contactFormSubject, contactFormMessage: this.contactFormMessage }).then((res) => {
      this.db.object(`contactFormMessages/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
    })

    this.contactFormName = '';
    this.contactFormEmail = '';
    this.contactFormSubject = '';
    this.contactFormMessage = '';
    
  }
}
