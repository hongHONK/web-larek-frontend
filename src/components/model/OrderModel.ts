import { OrderResult, Order, PaymentMethod, IWebLarekOrderApi } from './../../types/components/model/WebLarekApi';
import { IBascetModel } from "../../types/components/model/BascetModel";
import { IOrderModel } from "../../types/components/model/OrderModel";
import { IEvents } from "../base/events";


export class OrderModel implements IOrderModel {
    bascet: IBascetModel;
    protected _order: Order;

    constructor(
        protected api: IWebLarekOrderApi,
        bascet: IBascetModel 
    ) {}

    set paymentMethod(method: PaymentMethod) {}

    get PaymentMethod() {}

    set address(data: string) {}

    get address() {}

    set email(data: string) {}

    get email() {}

    set phone(data: string) {}

    get phone() {}

    sendOrder(): Promise<OrderResult> {
        
    }
}