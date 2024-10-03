import { ProdCategory, Product } from "../../types/components/model/WebLarekApi";
import { CardModalChange, CardModalSettings, ICardModal } from "../../types/components/view/CardModal";
import { CardCategoryOptions } from "../../types/settings";
import { IEvents } from "../base/events";

export class CardModal implements ICardModal {
    protected _element: HTMLElement;
    protected _title: HTMLElement;
    protected _category: HTMLElement;
    protected _image: HTMLImageElement;
    protected _text: HTMLElement;
    protected _price: HTMLElement;
    protected _bascetButton: HTMLButtonElement;
    protected _id: string;

    constructor(
        template: HTMLTemplateElement,
        protected settings: CardModalSettings,
        protected cardCategorySelectors: CardCategoryOptions,
        protected events: IEvents
    ) {
        this._element = template.content.querySelector(settings.element).cloneNode(true) as HTMLElement;
        this._title = this._element.querySelector(settings.title);
        this._category = this._element.querySelector(settings.category);
        this._image = this._element.querySelector(settings.image);
        this._text = this._element.querySelector(settings.text);
        this._price = this._element.querySelector(settings.price);
        this._bascetButton = this._element.querySelector(settings.bascetButton);

        this._bascetButton.addEventListener('click', () => {
            const data = {
                id: this._id
            }

            events.emit(CardModalChange.bascetAdd, data);
        })
    }

    set title(data: string) {
        this._title.textContent = data;
    }

    set category(data: ProdCategory) {
        this._category.textContent = data;
        switch(data) {
            case ProdCategory.Button:
                this._category.className = `${this.settings.category.replace('.', '')} ${this.cardCategorySelectors.button}`;
                break;
            case ProdCategory.Extra: 
                this._category.className = `${this.settings.category.replace('.', '')} ${this.cardCategorySelectors.extra}`;
                break;
            case ProdCategory.Hard:
                this._category.className = `${this.settings.category.replace('.', '')} ${this.cardCategorySelectors.hard}`;
                break;
            case ProdCategory.Other: 
            this._category.className = `${this.settings.category.replace('.', '')} ${this.cardCategorySelectors.other}`;
                break;
            case ProdCategory.Soft:
                this._category.className = `${this.settings.category.replace('.', '')} ${this.cardCategorySelectors.soft}`;
                break;
        }
    }

    set image(data: string) {
        this._image.src = data;
    }

    set price(data: number | null) {
        if (!data) {
            this._price.textContent = 'Бесценно';
        } else {
            this._price.textContent = `${data.toString()} синапсов`;
        }
    }

    set text(data: string) {
        this._text.textContent = data;
    }

    set id(data: string) {
        this._id = data;
    }

    get id() {
        return this._id;
    }

    render(data?: Product): HTMLElement {
        if (data) {
            this.title = data.title;
            this.category = data.category;
            this.image = data.image;
            this.price = data.price;
            this.text = data.description;
            this.id = data.id;
        }

        return this._element;
    }
}