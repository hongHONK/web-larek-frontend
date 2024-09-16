export interface BascetModalSettings {
    itemContainer: string;
    confirmButton: string;
    total: string;
}

export interface BascetModalData {
    items: HTMLElement[];
    total: number | null;
}

export interface IBascetModal {
    items: HTMLElement[];
    total: number | null;

    render(data?: BascetModalData): HTMLElement;
    setConfirmButtonHandler(handler: Function): void;
}