export interface ContactsModalSettings {
    emailInput: string;
    phoneInput: string;
    submitButton: string;
    error: string;
}

export interface IContactsModal {
    email: string;
    phone: string;
    error: string;

    render(): HTMLElement;
    setEmailInputHandler(handler: Function): void;
    setPhoneInputHandler(handler: Function): void;
    setSubmitButtonHandler(handler: Function): void;
    clearValue(): void;
}