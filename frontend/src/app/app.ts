import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosticsStore } from './state/diagnostics.store';
import { EventsTableComponent } from './features/events-table/events-table';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
 imports: [CommonModule, EventsTableComponent, FormsModule],
 
  template: `
  <h1>Fleet Diagnostics</h1>
<div style="max-width: 1000px; margin: auto;">
<div style="margin-bottom: 16px;">
<input
  placeholder="Vehicle ID"
  [(ngModel)]="vehicleId"
  (ngModelChange)="onFilterChange()"
/>

<select class="ng-untouched ng-pristine ng-valid" style="
    position: relative;
    left: 10px;
"><option value="">All Levels</option><option value="ERROR">ERROR</option><option value="WARN">WARN</option><option value="INFO">INFO</option></select>


<button style="position: relative; marginLeft:20px" (click)="showAll()">Show All</button>
<button  (click)="showErrors()">Show ERROR</button>

<app-events-table [events]="events$ | async"></app-events-table>

 
  `,
})
export class App{ 
  events$;
vehicleId: string = '';
level: string = '';


 
  constructor(private store: DiagnosticsStore) {
  this.events$ = this.store.events$;
  }
onVehicleChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.store.updateFilters({ vehicleId: value });
}

onLevelChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.store.updateFilters({ level: value });
}
onFilterChange() {
  this.store.updateFilters({
    vehicleId: this.vehicleId || undefined,
    level: this.level || undefined,
  });
}

showAll() {
  this.store.updateFilters({
    vehicleId: this.vehicleId || undefined,
    level: undefined
  });
}

showErrors() {
  this.store.updateFilters({
    vehicleId: this.vehicleId || undefined,
    level: 'ERROR'
  });
}

 
}

