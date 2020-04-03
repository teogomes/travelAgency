export interface User {
     uid: string;
     email: string;
     displayName: string;
     photoURL: string;
     emailVerified: boolean;
}

export interface BasicFirebaseData {
     title: string;
     message: string;
     imageUrl: string;
     url: string;
}

export interface TripData {
     id: string;
     imageUrl: string;
     message: string;
     title: string;
     type: string;
     url: string;
}

export interface FirebaseUser {
     uid: string;
     ID: string;
     displayName: string;
     role: string;
}