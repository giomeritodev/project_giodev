import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [UnitService, PrismaService],
    controllers: [UnitController]
})
export class UnitModule {}
