import 'firebase/firestore';
import { Component, OnInit, Injectable } from '@angular/core';
import { User } from "../../user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

// @Injectable({
//   providedIn: 'root'
// })

export class SigninComponent implements OnInit {
  userData: any; // Save logged in user data
  dropDownForSignup = false;
  email = ''
  password = ''
  name = ''

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore // Inject Firebase auth service
  ) {

    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

  }

  ngOnInit() {
  }

  toggleSignMethod() {
    this.dropDownForSignup = !this.dropDownForSignup
  }

  //Firebase 

  SignIn() {
    return this.firebaseAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp() {
    return this.firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        window.alert("userCreated")
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  

  // Reset Forggot password
  ForgotPassword() {
    return this.firebaseAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  SignOut() {
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
    })
  }

  // Returns true when user is looged in and email is verified
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null 
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

}
