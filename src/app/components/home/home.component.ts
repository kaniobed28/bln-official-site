import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Sample data for upcoming events
  events = [
    { title: 'Sermon On the Mount', date: 'June 1  - June 7, 2025', time: '10:00 AM', description: 'Join us for a spirit-filled worship experience.' },
    { title: 'Saturday Worship Service', date: 'Every Saturday', time: '10:00 AM', description: 'Join us for a spirit-filled worship experience.' },
    { title: 'Prayer Night', date: 'June 5, 2025', time: '7:00 PM', description: 'Come together for a night of prayer and fellowship.' },
  ];
}
