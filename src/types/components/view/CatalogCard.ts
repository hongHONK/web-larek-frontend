import { ProdCategory, Product } from "../model/WebLarekApi";

export interface CardSettings {
    element: string;
    title: string;
    image: string;
    price: string;
    category: string;
}

export enum CatalogCardChange {
    open = 'click:catalogCardOpen'
}

export interface CardData {
    title: string;
    image: string;
    price: number | null;
    category: ProdCategory;
    id: string;
}

export interface Card {
    title: string;
    image: string;
    price: number | null;
    category: ProdCategory;
    id: string;

    render(data?: CardData): HTMLElement;
}

export interface CatalogCardSettings extends CardSettings {
    openButton: string;
}
