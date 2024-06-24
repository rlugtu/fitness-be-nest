import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  findOrCreate(id: string) {
    return this.prisma.user.upsert({
      create: {
        id,
      },
      update: {},
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
