import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Request } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductType } from './ProductType';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}
    
    @Get()
    async findAllProducts(@Request() request){
        const {page, search} = request.query;  
        try {
            return await this.productService.findAllProducts(page, search);            
        } catch (error) {
            console.log("Houve um erro na busca")
        }
    }

    /*

    @Get("/:name")
    async findAllProductsName(@Param("name") name: string): Promise<ProductType[]>{
        return await this.productService.findAllProductsName(name);
    }*/ 

    @Get("/:id")
    async findByProduct(@Param("id") id: number): Promise<ProductType>{
        return await this.productService.findByProduct(Number(id));
    }

    @Post()
    async createProduct(@Body() product: ProductType): Promise<ProductType>{
        return await this.productService.createProduct(product);
    }

    @Put("edit/:id")
    async editProduct(
        @Param("id") id: number,
        @Body() productEdit: ProductType
    ): Promise<ProductType>{
        return await this.productService.editProduct(Number(id), productEdit);
    }

    @Patch("/entry/:id")
    async entryProduct(
        @Param("id") id: number,
        @Body() amount: ProductType
    ): Promise<ProductType>{
        return await this.productService.entryProduct(Number(id), amount);
    }

    @Delete("/:id")
    async deleteProduct(@Param("id") id: number): Promise<ProductType>{
        return await this.productService.deleteProduct(Number(id));
    }
}
