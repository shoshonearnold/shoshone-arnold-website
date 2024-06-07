import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public blog: BlogService) {}

  ngOnInit(): void {
    this.blog.getPosts();
  }
}
