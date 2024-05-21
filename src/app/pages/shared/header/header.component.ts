import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menus } from './../../../core/constants/constants';
import { CommonModule } from '@angular/common';
import { HelperService, Imenu, UserService } from '../../../core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userRoles: string[] = [];
  filertedMenus: Imenu[] = [];

  constructor(private helperService: HelperService, private userservice: UserService) {

    this.userRoles = helperService.getRole();

    Menus.filter((element: Imenu) => {
      element.roles.find((role: string) => {
        if (this.userRoles.includes(role)) {
          this.filertedMenus.push(element);
        }
      })
    });

  }

  logout() {
    this.userservice.logout();
  }
}
