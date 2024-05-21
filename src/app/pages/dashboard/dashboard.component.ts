import { Component } from '@angular/core';
import { HelperService, UserService } from '../../core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  role?: string[] = []
  constructor(private helperService: HelperService) {
    this.role = helperService.getRole();
  }
}
