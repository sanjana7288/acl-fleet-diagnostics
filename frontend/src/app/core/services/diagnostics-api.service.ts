import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiagnosticEvent } from '../../models/diagnostic-event.model';
import { tap } from 'rxjs/operators';





@Injectable({ providedIn: 'root' })
export class DiagnosticsApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any[]>(`${this.baseUrl}/events`);
  }





  getErrorsPerVehicle() {
    return this.http.get<{ vehicleId: string; count: number }[]>(
      `${this.baseUrl}/events/aggregates/errors-per-vehicle`
    );
  }
}

