import { Specifications } from "./IsmartPhone/smartPhoneSpecifications";
interface BaseProduct {
    id: number;
    name: string;
    price: number;
    old_price: number;
    popularity: number;
    reviews: number;
    rating: number;
    image: string[];
    discount: string;
    in_stock: boolean;
    warranty: string;
    country: string;
    type: string;
    isOnSale: boolean;
    quantity: number;
    description: string;
    specifications:Specifications; 
}

export default BaseProduct
