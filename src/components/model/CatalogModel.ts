import { CatalogChange, ICatalogModel } from "../../types/components/model/CatalogModel";
import { IWebLarekProdApi, Product } from "../../types/components/model/WebLarekApi";
import { IEvents } from "../base/events";

export class CatalogModel implements ICatalogModel {
    protected _productList: Map<string, Product>;

    constructor(
        protected api: IWebLarekProdApi,
        protected events: IEvents
    ) {}

    set productList(items: Product[]) {}
    
    get productList() {}

    loadProducts() {}

    getProductById(id: string) {}

    protected onChange(change: CatalogChange) {}
}