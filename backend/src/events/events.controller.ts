import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { EventsService } from './events.service';
import { QueryEventsDto } from './dto/query-events.dto';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @ApiQuery({ name: 'vehicle', required: false })
  @ApiQuery({ name: 'code', required: false })
  @ApiQuery({ name: 'level', required: false, enum: ['INFO', 'WARN', 'ERROR'] })
  @ApiQuery({ name: 'from', required: false, example: '2025-07-24T14:00:00Z' })
  @ApiQuery({ name: 'to', required: false, example: '2025-07-24T15:00:00Z' })
  getEvents(@Query() query: QueryEventsDto) {
    return this.eventsService.getEvents(query);
  }

  @Get('aggregates/errors-per-vehicle')
  getErrorsPerVehicle() {
    return this.eventsService.getErrorsPerVehicle();
  }
}

