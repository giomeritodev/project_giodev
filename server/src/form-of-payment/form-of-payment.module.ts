import { Module } from '@nestjs/common';
import { FormOfPaymentService } from './form-of-payment.service';
import { FormOfPaymentController } from './form-of-payment.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [FormOfPaymentService, PrismaService],
  controllers: [FormOfPaymentController]
})
export class FormOfPaymentModule {}
