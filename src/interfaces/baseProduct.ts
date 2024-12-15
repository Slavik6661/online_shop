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
}

export default BaseProduct