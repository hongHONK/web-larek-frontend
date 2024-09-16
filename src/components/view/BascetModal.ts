import { BascetModalData, BascetModalSettings, IBascetModal } from './../../types/components/view/BascetModal';

export class BascetModal implements IBascetModal {
    protected _element: HTMLElement;
    protected _itemContainer: HTMLElement;
    protected _total: HTMLElement;
    protected _confirmButton: HTMLButtonElement;

    constructor (
        template: HTMLTemplateElement,
        settings: BascetModalSettings
    ) {}

    set items(items: HTMLElement[]) {}

    get items() {}

    set total(data: number | null) {}

    get total() {}

    render(data?: BascetModalData): HTMLElement {}

    setConfirmButtonHandler(handler: Function): void {}
}