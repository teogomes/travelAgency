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

export interface SlideshowImage {
     imageUrl: string,
     urlLink: string,
}

export interface TravelPackage { 
     ID: string,
     imageUrl: string,
     title:string,
     message:string,
     subtitle:string,
     price:string,
     minAge:number,
     maxAge:number
}

export interface HotelData { 
     ID: string,
     imageUrl: string,
     title:string,
     message:string,
     url:string,
     destination:string,
}

