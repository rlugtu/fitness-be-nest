import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './resources/users/users.module';
import { ProgramsModule } from './resources/programs/programs.module';
import { WorkoutsModule } from './resources/workouts/workouts.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    ProgramsModule,
    WorkoutsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
