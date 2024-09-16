import { ISuccessModal, SuccessModalData, SuccessModalSettings } from "../../types/components/view/SuccessModal";

export class SuccessModal implements ISuccessModal {
    protected _element: HTMLElement;
    protected _discription: HTMLElement;
    protected _confirmButton: HTMLButtonElement;

    constructor(
        template: HTMLTemplateElement,
        settings: SuccessModalSettings
    ) {}

    set total(data: number | null) {}

    get total() {}

    render(data?: SuccessModalData): void {}
    
    setConfirmButtonHandler(handler: Function): void {}
}