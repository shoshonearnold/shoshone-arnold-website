import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3tltRRT0APVa6Ly1JA_96E-GVmlU8Bwg",
  authDomain: "shoshone-arnolds-website.firebaseapp.com",
  projectId: "shoshone-arnolds-website",
  storageBucket: "shoshone-arnolds-website.appspot.com",
  messagingSenderId: "6853342573",
  appId: "1:6853342573:web:7c5fb2748fa2afcd6b9664",
  measurementId: "G-8L98W2CX35"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//getAnalytics(app);
