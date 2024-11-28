export class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public image?: string
  ) {}
}

export default Product;
