import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import CategoryType from './CategoryType';


@Injectable()
export class CategoryService {

    constructor(private prisma: PrismaService){}

    async findByCategory(id: number): Promise<CategoryType>{
        return await this.prisma.category.findUnique({
            where: {id: Number(id)},
            include: {
                products: true,
            }
        })
    }

    async findAllCategory(): Promise<CategoryType[]>{
        return await this.prisma.category.findMany();
    }

    async createCategory({name}: CategoryType): Promise<CategoryType>{
        return await this.prisma.category.create({
            data: {name}
        });
    }

    async editCategory(
        id: number,
        category: CategoryType
    ): Promise<CategoryType>{
        const cat = this.findByCategory(id);
        return await this.prisma.category.update({
            where: {id},
            data: {
                ...cat,
                ...category,
            }
        });
    }

    async deleteCategory(where: Prisma.CategoryWhereUniqueInput): Promise<CategoryType>{
        return await this.prisma.category.delete({
            where: where
        })
    }
}
