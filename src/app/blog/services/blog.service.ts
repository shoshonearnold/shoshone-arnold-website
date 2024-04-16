import { Injectable } from '@angular/core';
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  db = getDatabase();

  constructor() {}

  getPosts(): void {
    const dbRef = ref(this.db);
    get(dbRef).then((snapshot) => {
      const posts = JSON.stringify(snapshot);
      const div = document.getElementsByClassName('blog-posts')[0];
      div.innerHTML = posts;
    }).catch((error) => {
      console.error(error);
    });
  }
}
