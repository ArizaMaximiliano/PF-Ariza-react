import Item from '../Item';
import React from 'react';

const ItemList = ({ data = [] }) => {
    return (
        data.map(instruments => <Item key={instruments.id} info={instruments} />)
    );
}

export default ItemList;