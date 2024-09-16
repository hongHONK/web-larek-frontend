import { Api, ApiListResponse } from "../base/api";
import { Product, Order, OrderResult, IWebLarekProdApi, IWebLarekOrderApi } from "../../types/components/model/WebLarekApi";

export class WebLarekApi extends Api implements IWebLarekProdApi, IWebLarekOrderApi {
    readonly imageBaseUrl: string;

    constructor(baseUrl: string, imageBaseUrl: string, options?: RequestInit) {
        super(baseUrl, options);
        this.imageBaseUrl = imageBaseUrl;
    }

    getProdList(): Promise<Product[]> {
        return this.get(`${this.baseUrl}/product/`).then((res: ApiListResponse<Product>) => {
                return res.items.map(item => {
                    item.image = this.imageBaseUrl + item.image;
                    return item;
                });
            }
        );
    }

    getProdById(id: string): Promise<Product> {
        return this.get(`${this.baseUrl}/product/${id}`).then((res: Product) => {
            res.image = this.imageBaseUrl + res.image;
            return res;
        })
    }

    postOrder(order: Order): Promise<OrderResult> {
        return this.post("/order", order) as Promise<OrderResult>;
    }
}