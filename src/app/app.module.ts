import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3tltRRT0APVa6Ly1JA_96E-GVmlU8Bwg',
  authDomain: 'shoshone-arnolds-website.firebaseapp.com',
  databaseURL: 'https://shoshone-arnolds-website-default-rtdb.firebaseio.com',
  projectId: 'shoshone-arnolds-website',
  storageBucket: 'shoshone-arnolds-website.appspot.com',
  messagingSenderId: '6853342573',
  appId: '1:6853342573:web:7c5fb2748fa2afcd6b9664',
  measurementId: 'G-8L98W2CX35',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
