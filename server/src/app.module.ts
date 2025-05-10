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
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { TypePartnerModule } from './type-partner/type-partner.module';
import { ContactController } from './contact/contact.controller';
import { ContactModule } from './contact/contact.module';
import { ContactService } from './contact/contact.service';
import { StatusPaymentModule } from './status-payment/status-payment.module';
import { StatusModule } from './status/status.module';
import { StatusController } from './status/status.controller';
import { StatusService } from './status/status.service';

@Module({
  imports: [CategoryModule, ProductModule, UnitModule, PartnerModule, FormOfPaymentModule, TypePartnerModule, EntryModule, SaleModule, StateModule, CityModule, AddressModule, ContactModule, StatusPaymentModule, StatusModule],
  controllers: [AppController, UnitController, PartnerController, ContactController, StatusController],
  providers: [AppService, PrismaService, UnitService, PartnerService, ContactService, StatusService],
})
export class AppModule {}
