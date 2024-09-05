import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';
import { UnitService } from './unit/unit.service';
import { UnitController } from './unit/unit.controller';
import { UnitModule } from './unit/unit.module';
import { PartnerModule } from './partner/partner.module';
import { PartnerController } from './partner/partner.controller';
import { PartnerService } from './partner/partner.service';
import { FormOfPaymentModule } from './form-of-payment/form-of-payment.module';
import { EntryModule } from './entry/entry.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [CategoryModule, ProductModule, UnitModule, PartnerModule, FormOfPaymentModule, EntryModule, SaleModule],
  controllers: [AppController, UnitController, PartnerController],
  providers: [AppService, PrismaService, UnitService, PartnerService],
})
export class AppModule {}
