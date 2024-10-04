import { CatalogChange, ICatalogModel } from "../../types/components/model/CatalogModel";
import { IWebLarekProdApi, Product } from "../../types/components/model/WebLarekApi";
import { IEvents } from "../base/events";

export class CatalogModel implements ICatalogModel {
    protected _productList: Map<string, Product>;

    constructor(
        protected events: IEvents
    ) {
        this._productList = new Map<string, Product>();
    }

    set productList(items: Product[]) {
        items.forEach(item => {
            this._productList.set(item.id, item);
        })
        this.onChange(CatalogChange.catalogList);
    }
    
    get productList() {
        let arr: Product[] = []
        
        this._productList.forEach(item => {
            arr.push(item);
        })

        return arr;
    }

    getProductById(id: string) {
        return this._productList.get(id);
    }

    protected onChange(change: CatalogChange) {
        console.log(change);
        this.events.emit(change, this.productList);
    }
}