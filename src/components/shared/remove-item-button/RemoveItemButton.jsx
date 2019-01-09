import React from 'react';

const RemoveItemButton = ({ onRemoveItem: removeItem }) => {
  return (
    <button type="button" className="button-remove" onClick={removeItem}>
      X
    </button>
  );
};

export default RemoveItemButton;
