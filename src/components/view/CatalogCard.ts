import { ProdCategory } from "../../types/components/model/WebLarekApi";
import { Card, CardData, CatalogCardChange, CatalogCardSettings } from "../../types/components/view/CatalogCard";
import { CardCategoryOptions } from "../../types/settings";
import { IEvents } from "../base/events";

export class CatalogCard implements Card {
    protected _element: HTMLButtonElement;
    protected _title: HTMLElement;
    protected _category: HTMLElement;
    protected _image: HTMLImageElement;
    protected _price: HTMLElement;
    protected _id: string;

    constructor(
        template: HTMLTemplateElement,
        protected settings: CatalogCardSettings,
        protected cardCategorySelectors: CardCategoryOptions,
        events: IEvents
    ) {
        this._element = template.content.querySelector(settings.element).cloneNode(true) as HTMLButtonElement;
        this._title = this._element.querySelector(settings.title);
        this._category = this._element.querySelector(settings.category);
        this._image = this._element.querySelector(settings.image);
        this._price = this._element.querySelector(settings.price);

        this._element.addEventListener('click', () => {
            const data = {
                id: this._id
            }

            events.emit(CatalogCardChange.open, data);
        })
    }

    set title(data: string) {
        this._title.textContent = data;
    }

    get title() {
        return this._title.textContent || '';
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

    get category() {
        return this._category.textContent as ProdCategory;
    }

    set image(data: string) {
        this._image.src = data;
    }

    get image() {
        return this._image.src;
    }

    set price(data: number | null) {
        if (!data) {
            this._price.textContent = 'Бесценно';
        } else {
            this._price.textContent = `${data.toString()} синапсов`;
        }
    }

    get price() {
        return Number.isNaN(this._price.textContent) ? null : Number(this._price.textContent);
    }

    set id(data: string) {
        this._id = data;
    }

    get id() {
        return this._id;
    }

    render(data?: CardData): HTMLElement {
        if (data) {
            this.title = data.title;
            this.category = data.category;
            this.image = data.image;
            this.price = data.price;
            this.id = data.id;
        }

        return this._element;
    }
}