import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { DiagnosticEvent } from './models/diagnostic-event.model';
import { QueryEventsDto } from './dto/query-events.dto';
// import { v4 as uuid } from 'uuid';
import * as crypto from 'crypto';


@Injectable()
export class EventsService {
  private repo = new EventsRepository();

  constructor() {
    this.seed();
  }

  getEvents(filters: QueryEventsDto): DiagnosticEvent[] {
    return this.repo.findAll().filter(event => {
      if (filters.vehicle && event.vehicleId !== filters.vehicle) return false;
      if (filters.code && event.code !== filters.code) return false;
      if (filters.level && event.level !== filters.level) return false;
      if (filters.from && event.timestamp < new Date(filters.from)) return false;
      if (filters.to && event.timestamp > new Date(filters.to)) return false;
      return true;
    });
  }

  getErrorsPerVehicle() {
    const map = new Map<string, number>();

    this.repo.findAll()
      .filter(e => e.level === 'ERROR')
      .forEach(e => {
        map.set(e.vehicleId, (map.get(e.vehicleId) || 0) + 1);
      });

    return Array.from(map.entries()).map(([vehicleId, count]) => ({
      vehicleId,
      errorCount: count,
    }));
  }

  private seed() {
    const data: Omit<DiagnosticEvent, 'id'>[] = [
      {
        timestamp: new Date('2025-07-24T14:21:08Z'),
        vehicleId: '1234',
        level: 'ERROR',
        code: 'U0420',
        message: 'Steering angle sensor malfunction',
      },
      {
        timestamp: new Date('2025-07-24T14:21:10Z'),
        vehicleId: '5678',
        level: 'WARN',
        code: 'P0300',
        message: 'Random misfire detected',
      },
      {
        timestamp: new Date('2025-07-24T14:22:05Z'),
        vehicleId: '1234',
        level: 'INFO',
        code: 'EVT01',
        message: 'Diagnostic check completed',
      },
    ];

    data.forEach(d =>
      this.repo.add({ ...d, id: crypto.randomUUID() }),
    );
  }
}
