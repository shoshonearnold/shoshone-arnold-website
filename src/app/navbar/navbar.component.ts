import { Component, OnInit } from '@angular/core';
import { Links } from './enums/links.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  LINKEDIN = Links.LINKEDIN;
  GITHUB = Links.GITHUB;
  EMAIL = Links.EMAIL;
  ngOnInit(): void {
    this.controlMenu();
  }

  controlMenu(): void {
    (() => {
      const body = document.body;
      const menuInit = body.getElementsByClassName('menu-trigger')[0];

      if (typeof menuInit !== 'undefined') {
        menuInit.addEventListener('click', () => {
          body.className === 'menu-active' ? '' : 'menu-active';
        });
      }
    }).call(this);
  }
}
