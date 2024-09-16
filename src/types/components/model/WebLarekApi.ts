export enum ProdCategory {
    Soft = "софт-скил",
    Hard = "хард-скил",
    Button = "кнопка",
    Extra = "дополнительное",
    Other = "другое"
}

export enum PaymentMethod {
    Online = "online",
    Offline = "offline"
}

export interface Product {
    id:string;
    description:string;
    image:string;
    title:string;
    category:ProdCategory;
    price:number | null;
}

export interface Order {
    payment:PaymentMethod;
    email:string;
    phone:string;
    address:string;
    total:number;
    items:string[];
}

export interface OrderResult {
    id:string;
    total:number;
}

export interface IWebLarekProdApi {
    getProdList(): Promise<Product[]>;
    getProdById(id: string):Promise<Product>;
}

export interface IWebLarekOrderApi {
    postOrder(order: Order): Promise<OrderResult>;
}