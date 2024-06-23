import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ClerkAuthGuard } from './guards/clerk-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ClerkAuthGuard)
  getHello(): Record<string, any> {
    return this.appService.getHello();
  }
}
