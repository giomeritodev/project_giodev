import { ProductService } from './product.service';
import { ProductType } from './ProductType';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAllProducts(request: any): Promise<{
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
    findAll(): Promise<{
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
    }[]>;
    findAllProductsByReference(request: any): Promise<{
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
    findByProduct(id: number): Promise<ProductType>;
    createProduct(product: ProductType): Promise<ProductType>;
    editProduct(id: number, productEdit: ProductType): Promise<ProductType>;
    entryProduct(id: number, amount: ProductType): Promise<ProductType>;
    deleteProduct(id: number): Promise<ProductType>;
}
