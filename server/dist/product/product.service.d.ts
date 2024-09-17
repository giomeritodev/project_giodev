import { PrismaService } from 'src/prisma/prisma.service';
import { ProductType } from './ProductType';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllProducts(page: number, search?: string): Promise<{
        product: {
            category: {
                id: number;
                name: string;
            };
            unit: {
                id: number;
                name: string;
                sigla: string;
            };
            id: number;
            name: string;
            barCode: string;
            reference: string;
            price: number;
            amount: number;
        }[];
        total: number;
        totalPages: number;
    }>;
    findAllProductsName(name: string): Promise<ProductType[]>;
    findByProduct(id: number): Promise<ProductType>;
    createProduct({ barCode, reference, name, price, unitId, categoryId }: ProductType): Promise<ProductType>;
    editProduct(id: number, { barCode, reference, name, price, amount, unitId, categoryId }: ProductType): Promise<ProductType>;
    entryProduct(id: number, { amount }: ProductType): Promise<ProductType>;
    deleteProduct(id: number): Promise<ProductType>;
}
