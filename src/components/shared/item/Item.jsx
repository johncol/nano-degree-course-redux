import React from 'react';

import RemoveItemButton from '../remove-item-button/RemoveItemButton';
import ItemText from '../item-text/ItemText';

const Item = props => {
  const {
    item,
    itemDoneProp,
    itemNameProp,
    onRemoveItem: removeItem,
    onToggleItem: toggleItem
  } = props;
  return (
    <li>
      <RemoveItemButton onRemoveItem={() => removeItem(item)} />
      <ItemText
        itemDone={item[itemDoneProp || 'done']}
        itemName={item[itemNameProp || 'name']}
        onToggleItem={() => toggleItem(item)}
      />
    </li>
  );
};

export default Item;
