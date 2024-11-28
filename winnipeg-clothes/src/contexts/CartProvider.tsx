import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "../objects/CartItem";


interface CartContextType {
  latestItem: CartItem;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  changeQuantity: (item: CartItem, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [latestItem, setLatestItem] = useState<CartItem>(new CartItem("", 0, "", "", "", 0, ""));

  const addToCart = (item: CartItem) => {
    setLatestItem(item);
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.equals(item));
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.equals(item)
            ? new CartItem(
                cartItem.name,
                cartItem.price,
                cartItem.size,
                cartItem.color,
                cartItem.description,
                cartItem.quantity + item.quantity,
                cartItem.image
              )
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (itemToRemove: CartItem) => {
    setCart((prevCart) => prevCart.filter((item) => item !== itemToRemove));
  };

  const changeQuantity = (itemToChange: CartItem, newQuantity: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.equals(itemToChange)) {
          return new CartItem(
            item.name,
            item.price,
            item.size,
            item.color,
            item.description,
            newQuantity,
            item.image
          );
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{latestItem, cart, addToCart, removeFromCart, clearCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
