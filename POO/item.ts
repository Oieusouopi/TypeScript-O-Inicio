class item {
    private _productName: string;
    private _price: number;
    
    constructor(productName: string, price: number) {
        this._productName = productName;
        this._price = price;
    }

    public get getPrice() { return this._price };
}

export default item;