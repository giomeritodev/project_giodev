import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import CategoryType from './CategoryType';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    findByCategory(id: number): Promise<CategoryType>;
    findAllCategory(): Promise<CategoryType[]>;
    createCategory({ name }: CategoryType): Promise<CategoryType>;
    editCategory(id: number, category: CategoryType): Promise<CategoryType>;
    deleteCategory(where: Prisma.CategoryWhereUniqueInput): Promise<CategoryType>;
}
