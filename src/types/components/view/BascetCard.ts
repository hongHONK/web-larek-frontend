import { CardData } from "./CatalogCard";

export interface BascetCardSettings { 
    element: string;
    index: string;
    title: string;
    price: string;
    deleteButton: string;
}

export enum BascetCardChange {
    delete = 'click:bascetCardDelete'
}

export interface BascetCardData extends CardData {
    index: number;
}

export interface IBascetCard {
    title: string;
    price: number | null;
    index: number;
    id: string;

    render(data?: BascetCardData): HTMLElement;    
}