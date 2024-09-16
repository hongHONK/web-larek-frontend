export interface SuccessModalSettings {
    description: string;
    confirmButton: string;
}

export interface SuccessModalData {
    total: number | null;
}

export interface ISuccessModal {
    total: number | null;

    render(data?: SuccessModalData): void;
    setConfirmButtonHandler(handler: Function): void;
}