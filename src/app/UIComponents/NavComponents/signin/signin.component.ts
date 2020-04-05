import 'firebase/firestore';
import { Component, OnInit, Injectable } from '@angular/core';
import { User, FirebaseUser } from "../../../Models";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  userData: any; // Save logged in user data
  dropDownForSignup = false;
  users: FirebaseUser[];
  email = ''
  password = ''
  name = ''
  userDisplayName = ''
  ageValue = '';

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore, // Inject Firebase auth service,
    public db: AngularFireDatabase
  ) {
    db.list('users').valueChanges().subscribe((res: FirebaseUser[]) => {
      this.users = res
      const user = JSON.parse(localStorage.getItem('user'));
      if (user != null) {
        this.SearchDatabaseFor(user)
      }
    })
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

  ngOnInit() { }

  toggleSignMethod() {
    this.dropDownForSignup = !this.dropDownForSignup
  }

  //Firebase 

  SignIn() {
    return this.firebaseAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        this.SearchDatabaseFor(result.user)
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
        this.AddUserToDatabase(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  AddUserToDatabase(user: firebase.User) {
    this.db.list('users').push({ uid: user.uid, displayName: this.name, role: 'user', email: user.email, age: this.ageValue }).then((res) => {
      this.db.object(`users/${res['path'].pieces_[1]}`).update({ ID: res['path'].pieces_[1] });
    })
    this.SetUserData(user);
  }

  SearchDatabaseFor(user: firebase.User) {
    var currentUser = this.users.find((firebaseUser) => {
      return firebaseUser.uid == user.uid
    })
    if (currentUser) {
      this.userDisplayName = currentUser.displayName
      localStorage.setItem('firebaseUser', JSON.stringify(currentUser));
    }
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
    location.reload();
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('firebaseUser');
    })
  }

  // Returns true when user is looged in and email is verified
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null
  }

  SetUserData(user) {
    location.reload();
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    this.resetInputs()
    return userRef.set(userData, {
      merge: true
    })
  }

  resetInputs() {
    this.email = ''
    this.password = ''
    this.name = ''
    this.ageValue = '';
  }

}
