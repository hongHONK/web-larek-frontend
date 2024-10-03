import { Product } from "../../types/components/model/WebLarekApi";
import { BascetCardChange, BascetCardData, BascetCardSettings, IBascetCard } from "../../types/components/view/BascetCard";
import { IEvents } from "../base/events";

export class BascetCard implements IBascetCard {
    protected _element: HTMLElement;
    protected _title: HTMLElement;
    protected _price: HTMLElement;
    protected _index: HTMLElement;
    protected _deleteButton: HTMLButtonElement;
    protected _id: string;

    constructor(
        template: HTMLTemplateElement,
        settings: BascetCardSettings,
        protected events: IEvents
    ) {
        this._element = template.content.querySelector(settings.element).cloneNode(true) as HTMLElement;
        this._title = this._element.querySelector(settings.title);
        this._price = this._element.querySelector(settings.price);
        this._index = this._element.querySelector(settings.index);
        this._deleteButton = this._element.querySelector(settings.deleteButton);

        this._deleteButton.addEventListener('click', () => {
            const data = {
                id: this._id
            }

            events.emit(BascetCardChange.delete, data);
        })
    }

    set title(data: string) {
        this._title.textContent = data;
    }

    set price(data: number | null) {
        if (!data) {
            this._price.textContent = 'Бесценно';
        } else {
            this._price.textContent = `${data.toString()} синапсов`;
        }
    }

    set index(data: number) {
        this._index.textContent = data.toString();
    }

    set id(data: string) {
        this._id = data;
    }

    get id() {
        return this._id || '';
    }

    render(data?: BascetCardData): HTMLElement {
        if (data) {
            this.title = data.title;
            this.price = data.price;
            this.index = data.index;
            this.id = data.id;
        }

        return this._element;
    }
}