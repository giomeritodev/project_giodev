import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusPaymentService } from './status-payment.service';
import { StatusPaymentController } from './status-payment.controller';

@Module({
  providers: [StatusPaymentService, PrismaService],
  controllers: [StatusPaymentController]
})
export class StatusPaymentModule {}
