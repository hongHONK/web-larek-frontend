import { Card, CardSettings } from "./CatalogCard";

export interface CardModalSettings extends CardSettings {
    text: string;
    bascetButton: string;
}

export interface ICardModal extends Card {
    text: string;

    setBascetButtonHandler(handler: Function): void;
}