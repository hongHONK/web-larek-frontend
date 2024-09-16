import { IPage, PageSettings } from "../../types/components/view/Page";

export class Page implements IPage {
    protected _catalogContainer: HTMLElement;
    protected _catalogItemClass: string;
    
    protected _modalContainer: HTMLElement;
    protected _modalCloseButton: HTMLButtonElement;
    protected _modalContent: HTMLElement;
    protected _modalIsActive: boolean = false;

    protected _bascetButton: HTMLButtonElement;
    protected _bascetCounter: HTMLElement;

    constructor(
        protected _container: HTMLElement,
        settings: PageSettings
    ) {}

    set catalogContainer(items: HTMLElement[]) {}

    set modalContainer(item: HTMLElement) {}

    set modalCloseButton(item: HTMLButtonElement) {}

    set modalContent(item: HTMLElement) {}

    set modalIsActive(status: boolean) {}

    set bascetCounter(count: number) {}

    setModalCloseButtonHandler(handler: Function): void {}

    setBuscetButtonHandler(handler: Function): void {}
}