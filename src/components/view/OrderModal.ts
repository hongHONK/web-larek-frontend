import { PaymentMethod } from "../../types/components/model/WebLarekApi";
import { IOrderModal, OrderModalChange, OrderModalData, OrderModalSettings } from "../../types/components/view/OrderModal";
import { AltButtonOptions } from "../../types/settings";
import { IEvents } from "../base/events";

export class OrderModal implements IOrderModal {
    protected _element: HTMLElement;
    protected _cardButton: HTMLButtonElement;
    protected _cashButton: HTMLButtonElement;
    protected _addressInput: HTMLInputElement;
    protected _submitButton: HTMLButtonElement;
    protected _error: HTMLElement;
    protected _paymentMethod: PaymentMethod;
    protected _altButtonOptions: AltButtonOptions;

    constructor(
        template: HTMLTemplateElement, 
        settings: OrderModalSettings,
        protected events: IEvents
    ) {
        this._element = template.content.querySelector(settings.element).cloneNode(true) as HTMLElement;
        this._cardButton = this._element.querySelector(settings.cardButton);
        this._cashButton = this._element.querySelector(settings.cashButton);
        this._addressInput = this._element.querySelector(settings.addressInput);
        this._submitButton = this._element.querySelector(settings.submitButton);
        this._error = this._element.querySelector(settings.error);
        this._altButtonOptions = settings.altButtonOptions;

        this._cardButton.addEventListener('click', () => {
            this.paymentMethod = PaymentMethod.Online;
            this.validateData();
        });

        this._cashButton.addEventListener('click', () => {
            this.paymentMethod = PaymentMethod.Offline;
            this.validateData();
        });

        this._addressInput.addEventListener('input', () => {
            this.validateData();
        });

        this._element.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const orderData: OrderModalData = {
                method: this._paymentMethod,
                address: this._addressInput.value
            };
            
            events.emit(OrderModalChange.submit, orderData);
        })
    }

    set paymentMethod(method: PaymentMethod) {
        if (this._paymentMethod != method) {
            this._paymentMethod = method;

            if (method == PaymentMethod.Online) {
                this._cardButton.className = `${this._altButtonOptions.button} ${this._altButtonOptions.altButtonActive}`;
                this._cashButton.className = `${this._altButtonOptions.button} ${this._altButtonOptions.altButton}`;
            } else {
                this._cardButton.className = `${this._altButtonOptions.button} ${this._altButtonOptions.altButton}`;
                this._cashButton.className = `${this._altButtonOptions.button} ${this._altButtonOptions.altButtonActive}`;
            }
        }
    }

    get paymentMethod() {
        return this._paymentMethod;
    }

    set address(data: string) {
        this._addressInput.value = data;
    }

    get address() {
        return this._addressInput.value || '';
    }

    set error(data: string) {
        this._error.textContent = data;
    }

    render(data?: OrderModalData): HTMLElement {
        if (data) {
            this.paymentMethod = data.method;
            this.address = data.address;
        }

        return this._element;
    }

    clearValue(): void {
        this._addressInput.value = '';
        
        this._paymentMethod = undefined;
        this._cardButton.className = `${this._altButtonOptions.button} ${this._altButtonOptions.altButton}`;
        this._cashButton.className = `${this._altButtonOptions.button} ${this._altButtonOptions.altButton}`;

        this.validateData();
    }

    protected validateData() {
        if(this._paymentMethod && this._addressInput.value) {
            this._submitButton.disabled = false;
        } else {
            this._submitButton.disabled = true;
        }
    }
}