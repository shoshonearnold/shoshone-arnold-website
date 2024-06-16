import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  currentAge = '';

  ngOnInit(): void {
    this.aboutMe();
  }

  aboutMe(): void {
    const mask = document.querySelector('#div-mask-back');
    const tl = gsap.timeline();

    tl.to(mask, {
      '--m1': '20%',
      delay: 2,
      duration: 0.5,
      ease: 'back.out(2)',
    }).to(mask, {
      '--m2': '30%',
      duration: 0.5,
      delay: 0.5,
      ease: 'back.out(2)',
    });

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(mask, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out',
      });
    });
    this.getMyAge();
  }

  getMyAge(): void {
    const date = new Date();
    const year = date.getFullYear();
    // months are is 0 indexed
    const age = date.getMonth() <= 8 ? year - 1 : year;
    const myAge = (age - 1997).toString();
    this.currentAge = myAge;
  }
}
