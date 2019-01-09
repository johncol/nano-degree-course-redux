import React from 'react';

const ItemText = props => {
  const { itemDone, itemName, onToggleItem: toggleItem } = props;
  return (
    <span
      className={'item-name' + (itemDone ? ' item-done' : '')}
      onClick={toggleItem}
    >
      {itemName}
    </span>
  );
};

export default ItemText;
