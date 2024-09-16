import { ContactsModalSettings, IContactsModal } from "../../types/components/view/ContactsModal";

export class ContactsModal implements IContactsModal {
    protected _element: HTMLElement;
    protected _emailInput: HTMLInputElement;
    protected _phoneInput: HTMLInputElement;
    protected _submitButton: HTMLButtonElement;
    protected _error: HTMLElement;

    constructor(
        template: HTMLTemplateElement,
        settings: ContactsModalSettings
    ) {}

    set email(data: string) {}

    get email() {}

    set phone(data: string) {}

    get phone() {}

    set error(data: string) {}

    get error() {}

    render(): HTMLElement {}

    setEmailInputHandler(handler: Function): void {}

    setPhoneInputHandler(handler: Function): void {}

    setSubmitButtonHandler(handler: Function): void {}

    clearValue() {}
}