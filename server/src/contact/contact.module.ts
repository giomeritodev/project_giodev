import { Module } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ContactController } from "./contact.controller";


@Module({
    providers: [ContactService, PrismaService],
    controllers: [ContactController]
})
export class ContactModule {

}