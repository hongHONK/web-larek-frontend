import { ISuccessModal, SuccessModalChange, SuccessModalData, SuccessModalSettings } from "../../types/components/view/SuccessModal";
import { IEvents } from "../base/events";

export class SuccessModal implements ISuccessModal {
    protected _element: HTMLElement;
    protected _discription: HTMLElement;
    protected _confirmButton: HTMLButtonElement;

    constructor(
        template: HTMLTemplateElement,
        settings: SuccessModalSettings,
        protected events: IEvents
    ) {
        this._element = template.content.querySelector(settings.element).cloneNode(true) as HTMLElement;
        this._discription = this._element.querySelector(settings.description);
        this._confirmButton = this._element.querySelector(settings.confirmButton);
        this._confirmButton.addEventListener('click', () => {
            events.emit(SuccessModalChange.confirm);
        })
    }

    set total(data: number | null) {
        if (data) {
            this._discription.textContent = `Списано ${data} синапсов`;
        } else {
            this._discription.textContent = 'Ваша покупка бесценна!';
        }
    }

    render(data?: SuccessModalData): HTMLElement {
        if (data) {
            this.total = data.total;
        }

        return this._element;
    }
}