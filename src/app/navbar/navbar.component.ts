import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    (function () {
      var $body = document.body,
        $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

      if (typeof $menu_trigger !== 'undefined') {
        $menu_trigger.addEventListener('click', function () {
          $body.className =
            $body.className == 'menu-active' ? '' : 'menu-active';
        });
      }
    }).call(this);
  }
}
