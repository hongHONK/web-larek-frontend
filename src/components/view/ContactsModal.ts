import { ContactsModalChange, ContactsModalData, ContactsModalSettings, IContactsModal } from "../../types/components/view/ContactsModal";
import { IEvents } from "../base/events";

export class ContactsModal implements IContactsModal {
    protected _element: HTMLElement;
    protected _emailInput: HTMLInputElement;
    protected _phoneInput: HTMLInputElement;
    protected _submitButton: HTMLButtonElement;
    protected _error: HTMLElement;

    constructor(
        template: HTMLTemplateElement,
        settings: ContactsModalSettings,
        protected events: IEvents
    ) {
        this._element = template.content.querySelector(settings.element).cloneNode(true) as HTMLTemplateElement;
        this._emailInput = this._element.querySelector(settings.emailInput);
        this._phoneInput = this._element.querySelector(settings.phoneInput);
        this._submitButton = this._element.querySelector(settings.submitButton);
        this._error = this._element.querySelector(settings.error);

        this._emailInput.addEventListener('input', () => {
            this.validateData();
        });

        this._phoneInput.addEventListener('input', () => {
            this.validateData();
        });

        this._element.addEventListener('submit', (e) => {
            e.preventDefault();

            const data: ContactsModalData = {
                email: this.email,
                phone: this.phone
            }

            events.emit(ContactsModalChange.submit, data);
        });
    }

    set email(data: string) {
        this._emailInput.value = data;
    }

    get email() {
        return this._emailInput.value || '';
    }

    set phone(data: string) {
        this._phoneInput.value = data;
    }

    get phone() {
        return this._phoneInput.value || '';
    }

    set error(data: string) {
        this._error.textContent = data;
    }

    render(data?: ContactsModalData): HTMLElement {
        if (data) {
            this._emailInput.value = data.email;
            this._phoneInput.value = data.phone;
        }

        return this._element;
    }

    clearValue() {
        this.email = '';
        this.phone = '';
        this.error = '';
    }

    protected validateData() {
        if(this._emailInput.value && this._phoneInput.value) {
            this._submitButton.disabled = false;
        } else {
            this._submitButton.disabled = true;
        }
    }
}