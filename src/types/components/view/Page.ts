export interface PageSettings {
    catalogSelector: string;
    catalogItemClass: string;
    modalContainerSelector: string;
    modalCloseButtonSelector: string;
    modalContentSelector: string;
    bascetButtonSelector: string;
    bascetCounterSelector: string;
}

export interface IPage {
    catalogContainer: HTMLElement[];
    modalContainer: HTMLElement;
    modalCloseButton: HTMLButtonElement;
    modalContent: HTMLElement;
    bascetCounter: number;

    setModalCloseButtonHandler(handler: Function): void;
    setBuscetButtonHandler(handler: Function): void;
}