export interface SuccessModalSettings {
    element: string;
    description: string;
    confirmButton: string;
}

export enum SuccessModalChange {
    confirm = 'click:successModalConfirm' 
}

export interface SuccessModalData {
    total: number | null;
}

export interface ISuccessModal {
    total: number | null;

    render(data?: SuccessModalData): HTMLElement;
}