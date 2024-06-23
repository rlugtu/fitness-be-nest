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

  @Post()
  create(@Req() req: Request, @Body() createProgramDto: CreateProgramDto) {
    const userId = req['userId'];
    return this.programsService.create(createProgramDto, userId);
  }

  @Get()
  findAll(@Req() req: Request) {
    const userId = req['userId'];
    return this.programsService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    return this.programsService.update(+id, updateProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programsService.remove(+id);
  }
}
