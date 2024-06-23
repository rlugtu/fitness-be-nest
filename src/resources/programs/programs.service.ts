import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProgramsService {
  constructor(private prisma: PrismaService) {}
  create(createProgramDto: CreateProgramDto, userId: string) {
    console.log(userId);
    return this.prisma.program.create({
      data: { ...createProgramDto, userId },
    });
  }

  async findAll(userId: string) {
    return this.prisma.program.findMany({
      where: {
        userId,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} program`;
  }

  update(id: number, updateProgramDto: UpdateProgramDto) {
    return `This action updates a #${id} program`;
  }

  remove(id: number) {
    return `This action removes a #${id} program`;
  }
}
