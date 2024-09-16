import { Product } from "../model/WebLarekApi";
import { CardData } from "./CatalogCard";

export interface BascetCardSettings { 
    index: string;
    title: string;
    price: string;
    deleteButton: string;
}

export interface BascetCardData extends CardData {
    index: number;
}

export interface IBascetCard {
    title: string;
    price: number | null;
    index: number;

    render(data?: BascetCardData): HTMLElement;

    setDeleteButtonHandler(handler: Function): void;     
}