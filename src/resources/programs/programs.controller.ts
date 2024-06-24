import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { ClerkAuthGuard } from 'src/guards/clerk-auth.guard';

@UseGuards(ClerkAuthGuard)
@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Get()
  async findAll(@Req() req: Request) {
    const userId = req['userId'];
    return await this.programsService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Req() req: Request, @Param('id') id: string) {
    const userId = req['userId'];
    return await this.programsService.findOne(id, userId);
  }

  @Post()
  async create(
    @Req() req: Request,
    @Body() createProgramDto: CreateProgramDto,
  ) {
    const userId = req['userId'];
    return await this.programsService.create(createProgramDto, userId);
  }

  @Patch(':id')
  async update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateProgramDto: UpdateProgramDto,
  ) {
    const userId = req['userId'];
    return await this.programsService.update(id, updateProgramDto, userId);
  }

  @Delete(':id')
  async remove(@Req() req: Request, @Param('id') id: string) {
    const userId = req['userId'];
    return await this.programsService.remove(id, userId);
  }
}
