import { IEvents } from '../base/events';
import { BascetModalChande, BascetModalData, BascetModalSettings, IBascetModal } from './../../types/components/view/BascetModal';

export class BascetModal implements IBascetModal {
    protected _element: HTMLElement;
    protected _itemContainer: HTMLElement;
    protected _total: HTMLElement;
    protected _confirmButton: HTMLButtonElement;

    constructor (
        template: HTMLTemplateElement,
        settings: BascetModalSettings,
        protected events: IEvents
    ) {
        this._element = template.content.querySelector(settings.element).cloneNode(true) as HTMLElement;
        this._itemContainer = this._element.querySelector(settings.itemContainer);
        this._total = this._element.querySelector(settings.total);
        this._confirmButton = this._element.querySelector(settings.confirmButton);

        this._confirmButton.addEventListener('click', () => {
            events.emit(BascetModalChande.confirm);
        })
    }

    set items(items: HTMLElement[]) {
        this._itemContainer.innerHTML = '';
        items.forEach(item => {
            this._itemContainer.append(item);
        });
    }

    set total(data: number | null) {
        if (!data) {
            this._total.textContent = '';
            this._confirmButton.disabled = true;
        } else {
            this._total.textContent = `${data.toString()} синапсов`;
            this._confirmButton.disabled = false;
        }
    }

    render(data?: BascetModalData): HTMLElement {
        if(data) {
            this.items = data.items;
            this.total = data.total;
        }

        return this._element;
    }
}