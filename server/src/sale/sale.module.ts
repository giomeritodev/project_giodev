import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItensSaleService } from './itens-sale/itens-sale.service';

@Module({
  providers: [SaleService, PrismaService, ItensSaleService],
  controllers: [SaleController]
})
export class SaleModule {}
