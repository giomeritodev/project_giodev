import { PrismaService } from 'src/prisma/prisma.service';
import { ProductType } from './ProductType';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllProducts(page: number, search?: string): Promise<{
        product: {
            id: number;
            barCode: string;
            reference: string;
            name: string;
            price: number;
            amount: number;
            unit: {
                id: number;
                name: string;
                sigla: string;
            };
            category: {
                id: number;
                name: string;
            };
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
