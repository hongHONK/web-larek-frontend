import { Product } from "../../types/components/model/WebLarekApi";
import { BascetCardData, BascetCardSettings, IBascetCard } from "../../types/components/view/BascetCard";

export class BascetCard implements IBascetCard {
    protected _element: HTMLElement;
    protected _title: HTMLElement;
    protected _price: HTMLElement;
    protected _index: HTMLElement;
    protected _deleteButton: HTMLButtonElement;

    constructor(
        template: HTMLTemplateElement,
        settings: BascetCardSettings
    ) {}

    set title(data: string) {}

    get title() {}

    set price(data: number | null) {}

    get price() {}

    set index(data: number) {}

    get index() {}

    render(data?: BascetCardData): HTMLElement {}

    setDeleteButtonHandler(handler: Function): void {}
}