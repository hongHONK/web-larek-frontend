import { Product } from "../../types/components/model/WebLarekApi";
import { CardModalSettings, ICardModal } from "../../types/components/view/CardModal";
import { CardCategoryOptions } from "../../types/settings";

export class CardModal implements ICardModal {
    protected _element: HTMLElement;
    protected _titile: HTMLElement;
    protected _category: HTMLElement;
    protected _image: HTMLImageElement;
    protected _text: HTMLElement;
    protected _price: HTMLElement;
    protected _bascetButton: HTMLButtonElement;
    protected _id: string;

    constructor(
        template: HTMLTemplateElement,
        settings: CardModalSettings,
        protected _cardCategorySelectors: CardCategoryOptions
    ) {}

    set title(data: string) {}

    get title() {}

    set category(data: string) {}

    get category() {}

    set image(data: string) {}

    get image() {}

    set price(data: number | null) {}

    get price() {}

    set text(data: string) {}

    get text() {}

    set id(data: string) {}

    get id() {}

    render(data?: Product): HTMLElement {}

    setBascetButtonHandler(handler: Function): void {}
}