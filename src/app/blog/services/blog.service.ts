import { Injectable } from '@angular/core';
import { child, get, getDatabase, onValue, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  db = getDatabase();
  articles: any;

  constructor() {
    this.articles = {};
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    const dbRef = ref(this.db);
    get(dbRef)
      .then((db) => {
        const posts = db.val();
        this.articles = {
          title: posts.data.posts[0].title,
          author: posts.data.posts[0].author,
          date: posts.data.posts[0].date,
          post: posts.data.posts[0].post
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
