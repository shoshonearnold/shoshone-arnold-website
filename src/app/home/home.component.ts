import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    this.svgMagic();
  }

  svgMagic(): void {
    gsap.to('#path1', { y: 100, yoyo: true, duration: 6, repeat: -1 });
    gsap.to('#path2', { y: 75, yoyo: true, duration: 3, repeat: -1 });
    gsap.to('#path3', { y: 40, yoyo: true, duration: 6, repeat: -1 });
    gsap.to('#path4', { y: 19, yoyo: true, duration: 3, repeat: -1 });
    gsap.to('#path5', { y: 22, yoyo: true, duration: 2, repeat: -1 });
  }
}
