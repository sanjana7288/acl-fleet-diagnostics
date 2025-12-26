export interface DiagnosticEvent {
  id: string;
  timestamp: Date;
  vehicleId: string;
  level: 'INFO' | 'WARN' | 'ERROR';
  code: string;
  message: string;
}
