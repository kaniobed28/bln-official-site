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
    {
      title: 'Sermon On the Mount',
      date: 'October 10  - October 12, 2025',
      time: 'Morning and Evening Sessions',
      description: 'Join us for a spirit-filled worship experience.'
    },
    {
      title: 'Saturday Worship Service',
      date: 'Every Saturday',
      time: '07:00 PM - 09:00 PM',
      description: 'Join us for a spirit-filled worship experience.'
    },
    {
      title: 'Miracle Movement',
      date: 'Every Monday',
      time: '7:00 PM',
      description: 'Come together for a night of prayer and fellowship.'
    }
  ];
}
