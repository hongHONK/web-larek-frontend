import { Product } from "./WebLarekApi";

export enum CatalogChange {
    catalogList = 'changed:catalogList'
}

export interface ICatalogModel {
    productList: Product[];
    getProductById(id: string): Product;
}