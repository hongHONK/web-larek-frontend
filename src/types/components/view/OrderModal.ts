import { AltButtonOptions } from './../../settings';
import { PaymentMethod } from './../model/WebLarekApi';

export interface OrderModalSettings {
    element: string;
    cardButton: string;
    cashButton: string;
    addressInput: string;
    submitButton: string;
    error: string;
    altButtonOptions: AltButtonOptions;
}

export enum OrderModalChange {
    submit = 'submit:orderModal'
}

export interface OrderModalData {
    method: PaymentMethod;
    address: string;
}

export interface IOrderModal {
    paymentMethod: PaymentMethod,
    address: string;
    error: string;

    render(): HTMLElement;
    clearValue(): void;
}