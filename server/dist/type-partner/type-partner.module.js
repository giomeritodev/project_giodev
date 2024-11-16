"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypePartnerModule = void 0;
const common_1 = require("@nestjs/common");
const type_partner_service_1 = require("./type-partner.service");
const type_partner_controller_1 = require("./type-partner.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let TypePartnerModule = class TypePartnerModule {
};
exports.TypePartnerModule = TypePartnerModule;
exports.TypePartnerModule = TypePartnerModule = __decorate([
    (0, common_1.Module)({
        providers: [type_partner_service_1.TypePartnerService, prisma_service_1.PrismaService],
        controllers: [type_partner_controller_1.TypePartnerController]
    })
], TypePartnerModule);
//# sourceMappingURL=type-partner.module.js.map