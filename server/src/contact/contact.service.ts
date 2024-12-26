import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ContactType } from "./ContactType";


@Injectable()
export class ContactService {

    constructor(
        private readonly prisma: PrismaService
    ){}

    async createContact({fone, email, name, position, partnerId}: ContactType){
        const contact = await this.prisma.contact.create({
            data: {
                fone,
                email,
                name,
                position,
                partnerId,
            }
        })
        return contact;                
    }

    async findManyContactByPartner({partnerId}: ContactType){
        const findByContact = await this.prisma.contact.findMany({
            where: {partnerId: partnerId},
        })
        return findByContact;
    }

    async findByContact(id: number){
        const findByContact = await this.prisma.contact.findMany({
            where: {id},
        })
        return findByContact;
    }

    async updateContactByParner(id: number, {fone, email, name, position, partnerId}: ContactType){
        let contact = this.findByContact(id);
        const updateContactBy = await this.prisma.contact.update({
            where: {
                id: id,
                partnerId: partnerId,
            },
            data: {
                ...contact,
                fone,
                email,
                name,
                position,
            }
        })
        return updateContactBy;
    }

    async deleteContactByPartner(id: number, {partnerId}: ContactType){
        const deleteContact = await this.prisma.contact.delete({
            where: {id, partnerId}
        })
        return deleteContact;
    }

}