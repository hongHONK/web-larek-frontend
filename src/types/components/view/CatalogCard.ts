import { Product } from "../model/WebLarekApi";

export interface CardSettings {
    title: string;
    image: string;
    price: number | null;
    category: string;
}

export interface CardData {
    data: Product
}

export interface Card {
    title: string;
    image: string;
    price: number | null;
    category: string;
    id: string;

    render(data?: CardData): HTMLElement;
}

export interface CatalogCardSettings extends CardSettings {
    openButton: string;
}

export interface ICatalogCard extends Card {
    setOpenButtonHandler(handler: Function): void;
}