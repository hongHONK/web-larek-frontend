import { PaymentMethod } from "../../types/components/model/WebLarekApi";
import { IOrderModal, OrderModalSettings } from "../../types/components/view/OrderModal";

export class OrderModal implements IOrderModal {
    protected _element: HTMLElement;
    protected _cardButton: HTMLButtonElement;
    protected _cashButton: HTMLButtonElement;
    protected _addressInput: HTMLInputElement;
    protected _submitButton: HTMLButtonElement;
    protected _error: HTMLElement;

    constructor(
        template: HTMLTemplateElement, 
        settings: OrderModalSettings
    ) {}

    set paymentMethod(method: PaymentMethod) {}

    get paymentMethod() {}

    set address(data: string) {}

    get address() {}

    set error(data: string) {}

    get error() {}

    render(): HTMLElement {}

    setAddressInputHandler(handler: Function): void {}

    setSubmitButtonHandler(handler: Function): void {}

    clearValue() {}
}