import './itemCount.css'

import React, { useState, useEffect } from 'react';

export const ItemCount = ({ initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
            <div className='btnCart'>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;