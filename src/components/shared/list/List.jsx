import React from 'react';

const List = props => {
  const { children } = props;
  return <ul className="list-items">{children}</ul>;
};

export default List;
