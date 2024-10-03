export interface PageSettings {
    catalogSelector: string;
    catalogItemClass: string;
    modalContainerSelector: string;
    modalCloseButtonSelector: string;
    modalContentSelector: string;
    modalActiveClass: string;
    bascetButtonSelector: string;
    bascetCounterSelector: string;
}

export enum PageChange {
    bascet = 'click:pageBascetOpen'
}

export interface IPage {
    catalogContent: HTMLElement[];
    modalContent: HTMLElement;
    modalIsActive: boolean;
    bascetCounter: number;
}