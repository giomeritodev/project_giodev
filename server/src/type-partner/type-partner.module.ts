import { Module } from '@nestjs/common';
import { TypePartnerService } from './type-partner.service';
import { TypePartnerController } from './type-partner.controller';

@Module({
  providers: [TypePartnerService],
  controllers: [TypePartnerController]
})
export class TypePartnerModule {}
