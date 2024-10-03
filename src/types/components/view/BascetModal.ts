export interface BascetModalSettings {
    element: string;
    itemContainer: string;
    confirmButton: string;
    total: string;
}

export enum BascetModalChande {
    confirm = 'click:bascetModalConfirm'
}

export interface BascetModalData {
    items: HTMLElement[];
    total: number | null;
}

export interface IBascetModal {
    items: HTMLElement[];
    total: number | null;

    render(data?: BascetModalData): HTMLElement;
}