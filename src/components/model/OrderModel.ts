import { OrderResult, Order, PaymentMethod, IWebLarekOrderApi } from './../../types/components/model/WebLarekApi';
import { IBascetModel } from "../../types/components/model/BascetModel";
import { IOrderModel } from "../../types/components/model/OrderModel";

export class OrderModel implements IOrderModel {
    bascet: IBascetModel;
    protected _paymentMethod: PaymentMethod;
    protected _address: string;
    protected _email: string;
    protected _phone: string;

    constructor(
        protected api: IWebLarekOrderApi,
        bascet: IBascetModel 
    ) {
        this.bascet = bascet;
    }

    set paymentMethod(method: PaymentMethod) {
        this._paymentMethod = method;
    }

    get paymentMethod() {
        return this._paymentMethod;
    }

    set address(data: string) {
        this._address = data;

    }

    get address() {
        return this._address || '';
    }

    set email(data: string) {
        this._email = data;
    }

    get email() {
        return this._email || '';
    }

    set phone(data: string) {
        this._phone = data;
    }

    get phone() {
        return this._phone || '';
    }

    sendOrder(): Promise<OrderResult> {
        const pricelessProductIdList = this.bascet.items.filter(item => {
            return item.price == null;
        }).map(item => {
            return item.id;
        });
        
        const order: Order = {
            payment: this._paymentMethod,
            address: this._address,
            email: this._email,
            phone: this._phone,
            total: this.bascet.totalPrice,
            items: this.bascet.productIdList.filter(item => {
                return !pricelessProductIdList.includes(item);
            })
        }

        return this.api.postOrder(order);
    }
}