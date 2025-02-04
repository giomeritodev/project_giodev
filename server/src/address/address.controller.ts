import { AddressService } from './address.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AddressType } from './AddressType';

@Controller('address')
export class AddressController {

    constructor(private readonly addressService: AddressService){}

    @Post()
    async create(@Body() {
        public_place, complement, number_address, cep, sector, cityId, partnerId
    }: AddressType){
        try {
            return await this.addressService.createAddress({
                public_place, complement, number_address, cep, sector, cityId, partnerId
            })
        } catch (error) {
            return ({
                message: "Ops, houve um erro ao cadastrar!"
            })
        }
    }

    @Get("/:id")
    async findBy(@Param("id") id: number){
        return await this.addressService.findBy(Number(id));
    }

    @Get("/partner/:partnerId")
    async findAllAddressByPartner(@Param("partnerId") partnerId: number){
        try {
            return await this.addressService.findAllAddressByPartner(Number(partnerId));
        } catch (error) {
            return ({
                message: "Ops, houve um erro ao buscar os dados!"
            })
        }
    }

    @Delete("/:id")
    async deleteAddressInPartner(
        @Param("id") id: number,        
    ){
        try {
            return await this.addressService.deleteByAddressInPartner(Number(id));
            
        } catch (error) {
            return {message: "Não foi possivel deletar o registro", error}
        }
    }
}
