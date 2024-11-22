import React from "react";
import "./PopupConfirmation.css";

interface PopupConfirmationProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isVisible: boolean;
}

const PopupConfirmation: React.FC<PopupConfirmationProps> = ({
  message,
  onConfirm,
  onCancel,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p className="popup-message">{message}</p>
        <div className="popup-actions">
          <button onClick={onConfirm} className="confirm-btn">
            Confirm
          </button>
          <button onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirmation;
