import { IsOptional, IsString, IsIn, IsISO8601 } from 'class-validator';

export class QueryEventsDto {
  @IsOptional()
  @IsString()
  vehicle?: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsIn(['INFO', 'WARN', 'ERROR'])
  level?: 'INFO' | 'WARN' | 'ERROR';

  @IsOptional()
  @IsISO8601()
  from?: string;

  @IsOptional()
  @IsISO8601()
  to?: string;
}
