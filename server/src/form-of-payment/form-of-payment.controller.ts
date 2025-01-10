import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FormOfPaymentService } from './form-of-payment.service';
import { FormOfPaymentType } from './FormOfPaymentType';

@Controller('form-of-payment')
export class FormOfPaymentController {

    constructor(private formOfPaymentService: FormOfPaymentService){}

    @Get()
    async findAllFormsOfPayments(): Promise<FormOfPaymentType[]>{
        return await this.formOfPaymentService.findAllFormsOfPayments();
    }

    @Post()
    async createFormOfPayment(@Body() formOfPayment: FormOfPaymentType): Promise<FormOfPaymentType>{
        return await this.formOfPaymentService.createFormOfPayment(formOfPayment);
    }

    @Delete(":id")
    async deleteFormOfPayment(@Param("id") id: number): Promise<FormOfPaymentType>{
        return await this.formOfPaymentService.deleteFormOfPayment(Number(id));
    }
}
