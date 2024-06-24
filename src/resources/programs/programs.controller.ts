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
  findOne(@Req() req: Request, @Param('id') id: string) {
    const userId = req['userId'];
    return this.programsService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateProgramDto: UpdateProgramDto,
  ) {
    const userId = req['userId'];
    return this.programsService.update(id, updateProgramDto, userId);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    const userId = req['userId'];
    return this.programsService.remove(id, userId);
  }
}
