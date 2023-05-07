import './item.css'

import { Link } from 'react-router-dom';
import React from 'react'

const Item = ({ info }) => {
    return (
        <div className='itemCard'>
            <Link to={'/detalles/' + info.id} className='instrument'>
                <img src={info.image} alt="" />
                <p>{info.title}</p>
            </Link>
        </div>
    );
}

export default Item;