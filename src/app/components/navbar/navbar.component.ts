import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']  // <-- ici pluriel
})
export class NavbarComponent {
  // Mobile menu state
  isMenuOpen = false;

  // Donate dialog state
  isDonateDialogOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openDonateDialog(event: Event) {
    event.preventDefault(); // Prevent navigation
    this.isDonateDialogOpen = true;
    this.isMenuOpen = false; // Close menu if open
  }

  closeDonateDialog() {
    this.isDonateDialogOpen = false;
  }
}
