import client from "./client";
import item from "./item";

class order {
    private _nameOfClient: client;
    private _products: item[];
    private _formOfPayment: string;
    private _discount: number;

    constructor(nameOfClient: client, products: item[], formOfPayment: string, discount: number) {
        this._nameOfClient = nameOfClient;
        this._products = products;
        this._formOfPayment = formOfPayment;
        this._discount = discount;
    }

    public totalValue() {
        const value: number = this._products.reduce((acc, curr) => {
        const total = curr.getPrice + acc.getPrice
        }
        );
    }
}