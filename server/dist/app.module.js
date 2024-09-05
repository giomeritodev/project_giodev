"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const category_module_1 = require("./category/category.module");
const prisma_service_1 = require("./prisma/prisma.service");
const product_module_1 = require("./product/product.module");
const unit_service_1 = require("./unit/unit.service");
const unit_controller_1 = require("./unit/unit.controller");
const unit_module_1 = require("./unit/unit.module");
const partner_module_1 = require("./partner/partner.module");
const partner_controller_1 = require("./partner/partner.controller");
const partner_service_1 = require("./partner/partner.service");
const form_of_payment_module_1 = require("./form-of-payment/form-of-payment.module");
const entry_module_1 = require("./entry/entry.module");
const sale_module_1 = require("./sale/sale.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [category_module_1.CategoryModule, product_module_1.ProductModule, unit_module_1.UnitModule, partner_module_1.PartnerModule, form_of_payment_module_1.FormOfPaymentModule, entry_module_1.EntryModule, sale_module_1.SaleModule],
        controllers: [app_controller_1.AppController, unit_controller_1.UnitController, partner_controller_1.PartnerController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, unit_service_1.UnitService, partner_service_1.PartnerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map