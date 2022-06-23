import Client from "./client";
import Item from "./item";

class order {
    private _nameOfClient: Client;
    private _products: Item[];
    private _formOfPayment: string;
    private _discount: number;

    constructor(nameOfClient: Client, products: Item[], formOfPayment: string, discount: number) {
        if (discount > 0) throw Error('discount maior que 0');
        this._nameOfClient = nameOfClient;
        this._products = products;
        this._formOfPayment = formOfPayment;
        this._discount = discount;
    }

    public set discount(discount: number) {
        if (discount > 0) throw Error('discount maior que 0');
        this._discount = discount;
    }
    
    public get getDiscount(): number { return this._discount };

    public totalValue(): number {
        return this._products.reduce((acc, curr) => curr.getPrice + acc,0);
    }

    public valueWithDiscount(): number {
        return this.totalValue() * (1 - this._discount);
    }
}

export default order;