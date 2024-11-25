// contexts/CartNotificationContext.tsx
import React, { createContext, useContext, useState } from "react";

interface CartNotificationContextProps {
  showNotification: boolean;
  handleShowNotification: () => void;
  handleHideNotification: () => void;
}

const CartNotificationContext = createContext<CartNotificationContextProps | undefined>(undefined);

export const useCartNotification = () => {
  const context = useContext(CartNotificationContext);
  if (!context) {
    throw new Error("useCartNotification must be used within a CartNotificationProvider");
  }
  return context;
};

export const CartNotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true); // Show the notification
  };

  const handleHideNotification = () => {
    setShowNotification(false); // Hide the notification after timeout
  };

  return (
    <CartNotificationContext.Provider
      value={{ showNotification, handleShowNotification, handleHideNotification }}
    >
      {children}
    </CartNotificationContext.Provider>
  );
};
