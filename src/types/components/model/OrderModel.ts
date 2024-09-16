import { OrderResult, PaymentMethod } from './WebLarekApi';
import { IBascetModel } from "./BascetModel";


export interface IOrderModel {
    bascet: IBascetModel;
    paymentMethod: PaymentMethod;
    address: string;
    email: string;
    phone: string;

    sendOrder(): Promise<OrderResult>;
}