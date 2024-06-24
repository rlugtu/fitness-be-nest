import { Controller, Get, Delete, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClerkAuthGuard } from 'src/guards/clerk-auth.guard';

@UseGuards(ClerkAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findOrCreate(@Req() req: Request) {
    const userId = req['userId'];

    return await this.usersService.findOrCreate(userId);
  }

  @Delete()
  async remove(@Req() req: Request) {
    const userId = req['userId'];

    return await this.usersService.remove(userId);
  }
}
