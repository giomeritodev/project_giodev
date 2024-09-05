import { Body, Controller, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleType } from './SaleType';
import { ItensSaleType } from './itens-sale/ItensSaleType';
import { ItensSaleService } from './itens-sale/itens-sale.service';




@Controller('sale')
export class SaleController {

    constructor(
        private saleService: SaleService,
        private itensSaleService: ItensSaleService,
    ){}

    @Get("/:id")
    async findBySale(@Param("id") id: number): Promise<SaleType>{
        return await this.saleService.findBySale(Number(id));
    }

    @Get()
    async findAllSales(@Request() request){        
        // request.query.hasOwnProperty('page') ? request.query.page : 0;
        // request.query.hasOwnProperty('search') ? request.query.search : '';

        const {page, search} = request.query

        console.log(page, search);
        
        try {            
            return await this.saleService.findAllSales(page, search);
        } catch (error) {
            console.log("Houve um erro na paginação");
        }
        
    }

    @Post()
    async createSale(@Body() sale: SaleType): Promise<SaleType>{
        return await this.saleService.createSale(sale);
    }

    @Post("/itens")
    async addItensSale(
        @Body() itensSale: ItensSaleType
    ): Promise<ItensSaleType>{
        return await this.itensSaleService.addItensSale(itensSale);
    }

    @Get("/itens/:saleId")
    async findAllItensBySale(@Param("saleId") saleId: number): Promise<ItensSaleType[]>{
        return await this.itensSaleService.findAllItensBySale(Number(saleId));
    }

    @Patch("/:id")
    async finaliseSale(@Param("id") id: number, @Body() status: SaleType): Promise<SaleType>{
        return await this.saleService.finaliseSale(Number(id), status);
    }
}
