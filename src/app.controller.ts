import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/IT3")
  getIT2(): string{
    return 'It work3';
  }
  @Get("/IT2")
  getIT2(): string{
    return 'It work2';
  }
}
