import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
