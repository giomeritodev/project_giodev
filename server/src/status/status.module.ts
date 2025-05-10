import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusController } from './status.controller';

@Module({
  providers: [StatusService, PrismaService],
  controllers: [StatusController]
})
export class StatusModule {}
