import { Product } from "../../types/components/model/WebLarekApi";
import { CatalogCardSettings, ICatalogCard } from "../../types/components/view/CatalogCard";
import { CardCategoryOptions } from "../../types/settings";

export class CatalogCard implements ICatalogCard {
    protected _element: HTMLButtonElement;
    protected _titile: HTMLElement;
    protected _category: HTMLElement;
    protected _image: HTMLImageElement;
    protected _price: HTMLElement;
    protected _id: string;

    constructor(
        template: HTMLTemplateElement,
        settings: CatalogCardSettings,
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

    set id(data: string) {}

    get id() {}

    render(data?: Product): HTMLElement {}

    setOpenButtonHandler(handler: Function): void   {}
}