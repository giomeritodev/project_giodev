import { ProductService } from './product.service';
import { ProductType } from './ProductType';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAllProducts(request: any): Promise<{
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
    findByProduct(id: number): Promise<ProductType>;
    createProduct(product: ProductType): Promise<ProductType>;
    editProduct(id: number, productEdit: ProductType): Promise<ProductType>;
    entryProduct(id: number, amount: ProductType): Promise<ProductType>;
    deleteProduct(id: number): Promise<ProductType>;
}
