export interface DiagnosticEvent {
  id: string;
  timestamp: string;
  vehicleId: string;
  level: 'ERROR' | 'WARN' | 'INFO';
  code: string;
  message: string;
}
