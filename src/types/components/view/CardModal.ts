import { Card, CardSettings } from "./CatalogCard";

export interface CardModalSettings extends CardSettings {
    text: string;
    bascetButton: string;
}

export enum CardModalChange {
    bascetAdd = 'click:cardModalBascetAdd'
}

export interface ICardModal extends Card {
    text: string;
}