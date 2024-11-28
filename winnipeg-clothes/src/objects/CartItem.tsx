export class CartItem {
  constructor(
    public name: string,
    public price: number,
    public size: string,
    public color: string,
    public description: string,
    public quantity: number,
    public image?: string
  ) {}

  equals(item: CartItem): boolean {
    return (
      this.name === item.name &&
      this.size === item.size &&
      this.price === item.price &&
      this.description === item.description &&
      this.image === item.image
    );
  }
}