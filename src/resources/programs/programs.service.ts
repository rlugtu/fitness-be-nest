import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProgramsService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string, includeWorkouts: boolean = false) {
    return this.prisma.program.findMany({
      where: {
        userId,
      },
      include: {
        workouts: includeWorkouts,
      },
    });
  }

  async findOne(id: string, userId: string, includeWorkouts: boolean = false) {
    return this.prisma.program.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        workouts: includeWorkouts,
      },
    });
  }

  async create(createProgramDto: CreateProgramDto, userId: string) {
    return this.prisma.program.create({
      data: { ...createProgramDto, userId },
    });
  }

  async update(id: string, updateProgramDto: UpdateProgramDto, userId: string) {
    return this.prisma.program.update({
      where: {
        id,
        userId,
      },
      data: updateProgramDto,
    });
  }

  async remove(id: string, userId: string) {
    return this.prisma.program.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
