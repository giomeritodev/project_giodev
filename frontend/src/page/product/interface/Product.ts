

export interface ProductType {
    id: number,
    barCode?: string,
    reference?: string,
    name: string,
    costPrice: number,
    price: number,
    amount: number,
    unitId: number,
    categoryId: number
    unit?: {
        id: number,
        name: string,
        sigla: string
    },
    category?: {
        id: number,
        name: string,
    }
}