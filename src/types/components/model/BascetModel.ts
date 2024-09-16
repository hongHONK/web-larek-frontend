import { Product } from "./WebLarekApi";

export enum BasketChange {
    bascetList = 'changed:basketList'
}

export interface IBascetModel {
    items: Product[];
    productIdList: string[];
    totalProducts: number;
    totalPrice: number;
    
    addProduct(item: Product): void;
    removeProduct(item: Product): void;
}