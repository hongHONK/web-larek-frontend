import { IPage, PageChange, PageSettings } from "../../types/components/view/Page";
import { IEvents } from "../base/events";

export class Page implements IPage {
    protected _container: HTMLElement;
    protected _catalogContainer: HTMLElement;
    protected _catalogItemClass: string;
    
    protected _modalContainer: HTMLElement;
    protected _modalCloseButton: HTMLButtonElement;
    protected _modalContent: HTMLElement;
    protected _modalIsActive: boolean = false;
    protected _modalActiveClass: string;

    protected _bascetButton: HTMLButtonElement;
    protected _bascetCounter: HTMLElement;

    constructor(
        container: HTMLElement,
        settings: PageSettings,
        protected events: IEvents
    ) {
        this._container = container;
        this._catalogContainer = this._container.querySelector(settings.catalogSelector);
        this._catalogItemClass = settings.catalogItemClass;
        this._modalContainer = this._container.querySelector(settings.modalContainerSelector);
        this._modalCloseButton = this._container.querySelector(settings.modalCloseButtonSelector);
        this._modalContent = this._container.querySelector(settings.modalContentSelector);
        this._modalActiveClass = settings.modalActiveClass;
        this._bascetButton = this._container.querySelector(settings.bascetButtonSelector);
        this._bascetCounter = this._container.querySelector(settings.bascetCounterSelector);
        
        this._modalCloseButton.addEventListener('click', e => {
            this.modalIsActive = false;
        });

        this._modalContainer.addEventListener('click', e => {
            if (e.target === e.currentTarget) this.modalIsActive = false;
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.modalIsActive = false;
            }
        });

        this._bascetButton.addEventListener('click', () => {
            events.emit(PageChange.bascet);
        });
    }

    set catalogContent(items: HTMLElement[]) {
        this._catalogContainer.innerHTML = '';
        items.forEach(item => {
            this._catalogContainer.append(item);
        });
    }

    set modalContent(item: HTMLElement) {
        this._modalContent.innerHTML = '';
        this._modalContent.append(item);
        console.log(this._modalContent);
    }

    set modalIsActive(status: boolean) {
        if (this._modalIsActive != status) {
            this._modalIsActive = status;
            if (status) {
                this._modalContainer.classList.add(this._modalActiveClass);
            } else {
                this._modalContainer.classList.remove(this._modalActiveClass);
            }
        }
    }

    set bascetCounter(count: number) {
        this._bascetCounter.textContent = count.toString();
    }
}