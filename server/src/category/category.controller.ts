import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import CategoryType from './CategoryType';

export interface CategoryEdit {
    name: string
}

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService){}

    @Get('/:id')
    async findByCategory(@Param('id') id: number): Promise<CategoryType>{
        return await this.categoryService.findByCategory(id);
    }  

    @Get()
    async findAllCategory(): Promise<CategoryType[]>{
        return await this.categoryService.findAllCategory();
    }

    @Post()
    async createCategory(@Body() categoryData: CategoryType): Promise<CategoryType>{
        return await this.categoryService.createCategory(categoryData);
    }

    @Put('/edit/:id')
    async editCategory(
        @Param("id") id: number,
        @Body() cat: CategoryType
    ): Promise<CategoryType>{
        return await this.categoryService.editCategory(Number(id), cat);
    }

    @Delete('/:id')
    async deleteCategory(@Param('id') id: number): Promise<CategoryType>{
        return this.categoryService.deleteCategory({id: Number(id)});
    }
}
