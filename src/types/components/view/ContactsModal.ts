export interface ContactsModalSettings {
    element: string;
    emailInput: string;
    phoneInput: string;
    submitButton: string;
    error: string;
}

export enum ContactsModalChange {
    submit = 'submit:contactsModal'
}

export interface ContactsModalData {
    email: string;
    phone: string;
}

export interface IContactsModal {
    email: string;
    phone: string;
    error: string;

    render(): HTMLElement;
    clearValue(): void;
}