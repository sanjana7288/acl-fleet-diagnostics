import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-table',
  standalone: true,
  imports: [CommonModule],
templateUrl: './events-table.html',
styleUrls: ['./events-table.scss'],
 
})
export class EventsTableComponent {
  @Input() events: any[] | null = [];
}
