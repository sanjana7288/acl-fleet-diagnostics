import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, switchMap, map, shareReplay } from 'rxjs/operators';
import { DiagnosticsApiService } from '../core/services/diagnostics-api.service';
import { DiagnosticEvent } from '../models/diagnostic-event.model';
@Injectable({ providedIn: 'root' })
export class DiagnosticsStore {
private filtersSubject = new BehaviorSubject<{
  vehicleId?: string;
  level?: string;
}>({});

filters$ = this.filtersSubject.asObservable();

events$ = this.filters$.pipe(
  debounceTime(300),
  switchMap(filters =>
    this.api.getEvents().pipe(
     map((events: any[]) =>
  events.filter(e =>
    (!filters.vehicleId || e.vehicleId === filters.vehicleId) &&
    (!filters.level || e.level === filters.level)
  )
)

    )
  ),
  shareReplay(1)
);


updateFilters(filters: { vehicleId?: string; level?: string }) {
  this.filtersSubject.next(filters);
}
 

  errorsPerVehicle$!: Observable<{ vehicleId: string; count: number }[]>;

  constructor(private api: DiagnosticsApiService) {
    this.errorsPerVehicle$ = this.api.getErrorsPerVehicle().pipe(
      shareReplay(1)
    );
  }

 
}

