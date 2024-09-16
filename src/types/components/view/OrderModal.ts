import { PaymentMethod } from './../model/WebLarekApi';

export interface OrderModalSettings {
    cardButton: string;
    cashButton: string;
    addressInput: string;
    submitButton: string;
    error: string;
}

export interface IOrderModal {
    paymentMethod: PaymentMethod,
    address: string;
    error: string;

    render(): HTMLElement;
    setAddressInputHandler(handler: Function): void;
    setSubmitButtonHandler(handler: Function): void;
    clearValue(): void;
}