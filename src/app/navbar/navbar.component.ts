import { Component } from '@angular/core';
import { Links } from './enums/links.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  LINKEDIN = Links.LINKEDIN;
  GITHUB = Links.GITHUB;
  EMAIL = Links.EMAIL;
}
