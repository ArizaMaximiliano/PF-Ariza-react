import './itemDetail.css'

import ItemCount from '../ItemCount';
import React from "react";

export const ItemDetail = ({ data }) => {

    const onAdd = (quantity) => {
        console.log("Las unidades que compraste son: " + quantity);
    }

    return (
        <div className="containerDetail">
            <div className="detail">
                <img className="detailImage" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>

                    <ItemCount initial={1} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;