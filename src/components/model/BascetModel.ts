import { BasketChange, IBascetModel } from "../../types/components/model/BascetModel";
import { Product } from "../../types/components/model/WebLarekApi";
import { IEvents } from "../base/events";


export class BascetModel implements IBascetModel {
    protected _bascetList: Map<string, Product> = new Map<string, Product>();

    constructor(
        protected event: IEvents
    ) {}

    set items(items: Product[]) {
        items.forEach(item => {
            this._bascetList.set(item.id, item);
        })
        
        this.onChange(BasketChange.bascetList);
    }

    get items() {
        return Array.from(this._bascetList.values());
    }

    get productIdList() {
        return Array.from(this._bascetList.keys());
    }

    get totalProducts() {
        return this._bascetList.size;
    }

    get totalPrice() {
        return Array.from(this._bascetList.values()).reduce((sum: number, value: Product) => {
            return sum + Number(value.price);
        }, 0);
    }

    addProduct(item: Product): void {
        this._bascetList.set(item.id, item);
        this.onChange(BasketChange.bascetList);
    }

    removeProduct(item: Product): void {
        this._bascetList.delete(item.id);
        this.onChange(BasketChange.bascetList);
    }

    resetBascet() {
        this._bascetList = new Map<string, Product>;
        this.onChange(BasketChange.bascetList);
    }

    protected onChange(change: BasketChange) {
        this.event.emit(BasketChange.bascetList, this);
    }
}