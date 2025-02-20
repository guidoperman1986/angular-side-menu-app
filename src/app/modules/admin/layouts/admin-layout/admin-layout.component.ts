import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {
  isAuthenticated = signal(false);

  onSignOut() {
    this.isAuthenticated.set(false);
  }
  onSignIn() {
    this.isAuthenticated.set(true);
  }
}
