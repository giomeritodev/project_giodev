import { Module } from '@nestjs/common';
import { TypePartnerService } from './type-partner.service';
import { TypePartnerController } from './type-partner.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TypePartnerService, PrismaService],
  controllers: [TypePartnerController]
})
export class TypePartnerModule {}
