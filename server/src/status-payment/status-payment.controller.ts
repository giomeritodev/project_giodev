import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StatusPaymentService } from './status-payment.service';
import { StatusPaymentType } from './StatusPaymentType';

@Controller('status-payment')
export class StatusPaymentController {

    constructor(private statusPaymentService: StatusPaymentService){}

    @Get()
    async findAllStatusPayments(): Promise<StatusPaymentType[]>{
        return await this.statusPaymentService.findAllStatusPayments();
    }

    @Post()
    async createStatusPayment(@Body() statusPayment: StatusPaymentType): Promise<StatusPaymentType>{
        return await this.statusPaymentService.createStatusPayment(statusPayment);
    }

    @Delete(":id")
    async deleteFormOfPayment(@Param("id") id: number): Promise<StatusPaymentType>{
        return await this.statusPaymentService.deleteStatusPayment(Number(id));
    }

    @Put('/edit/:id')
    async editFormOfPayment(
        @Param("id") id: number,
        @Body() status: StatusPaymentType
    ): Promise<StatusPaymentType>{
        return await this.statusPaymentService.editStatusPayment(Number(id), status);
    }
}
