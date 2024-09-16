import { BasketChange, IBascetModel } from "../../types/components/model/BascetModel";
import { Product } from "../../types/components/model/WebLarekApi";
import { IEvents } from "../base/events";


export class BasketModel implements IBascetModel {
    protected _bascetList: Map<string, Product>;

    constructor(
        protected event: IEvents
    ) {}

    set items(items: Product[]) {}

    get items() {}

    get productIdList() {}

    get totalProducts() {}

    get totalPrice() {}

    addProduct(item: Product): void {
        
    }

    removeProduct(item: Product): void {
        
    }

    protected onChange(change: BasketChange) {}
}