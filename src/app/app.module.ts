import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/matarial.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogService } from './blog/services/blog.service';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD78-uM-xu49Jq10RE1QD8Xqu7x5xqtusQ',
  authDomain: 'soa-web-app-1.firebaseapp.com',
  projectId: 'soa-web-app-1',
  storageBucket: 'soa-web-app-1.appspot.com',
  messagingSenderId: '212733230602',
  appId: '1:212733230602:web:0a3e20def5ac12bef229f3',
  measurementId: 'G-8T3VHL8BLD',
  databaseURL: 'https://soa-web-app-1-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
getDatabase(app);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    BlogComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
