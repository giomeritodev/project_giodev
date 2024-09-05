import { CategoryService } from './category.service';
import CategoryType from './CategoryType';
export interface CategoryEdit {
    name: string;
}
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    findByCategory(id: number): Promise<CategoryType>;
    findAllCategory(): Promise<CategoryType[]>;
    createCategory(categoryData: CategoryType): Promise<CategoryType>;
    editCategory(id: number, cat: CategoryType): Promise<CategoryType>;
    deleteCategory(id: number): Promise<CategoryType>;
}
