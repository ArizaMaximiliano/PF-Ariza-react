import './itemListContainer.css'

import ItemList from '../ItemList';
import Text from "../Text";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'instruments')

        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(instruments => ({ id: instruments.id, ...instruments.data() }))));
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(instruments => ({ id: instruments.id, ...instruments.data() }))))
        }
    }, [categoriaId])



    return (
        <>
            <div className='catalogue'>
                {/* <Text greeting={texto} /> */}
                <ItemList data={data} />
            </div>
        </>
    );
}

export default ItemListContainer;