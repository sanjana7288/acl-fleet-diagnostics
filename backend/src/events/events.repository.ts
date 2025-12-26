import { DiagnosticEvent } from './models/diagnostic-event.model';

export class EventsRepository {
  private events: DiagnosticEvent[] = [];

  add(event: DiagnosticEvent) {
    this.events.push(event);
  }

  findAll(): DiagnosticEvent[] {
    return this.events;
  }
}
