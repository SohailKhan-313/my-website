import React, { useEffect } from 'react';
import { Icon } from './Icons';

export const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container" role="alert" aria-live="assertive">
      <Icon name="check" size={18} style={{ color: '#10b981' }} />
      <span>{message}</span>
    </div>
  );
};
