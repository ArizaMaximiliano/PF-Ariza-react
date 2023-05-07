import ItemDetail from "../ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const instruments = [
    { id: 1, image: "https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", category: "guitarras", title: "Guitarra 1" },
    { id: 2, image: "https://http2.mlstatic.com/D_NQ_NP_777659-MLA52186614508_102022-W.jpg", category: "guitarras", title: "Guitarra 2" },
    { id: 3, image: "https://images.gibson.com/Lifestyle/Spanish/black_beauty_600.jpg", category: "guitarras", title: "Guitarra 3" },
    { id: 4, image: "https://media.istockphoto.com/id/480652459/es/foto/piano-de-cola-negro-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=nQXQGXWbhg3VCH_zrIBqQ1ZTxo73C-tZxDSvBPcwczA=", category: "pianos", title: "Piano 1" },
    { id: 5, image: "https://hinves.com/wp-content/uploads/2015/07/Curiosidades-sobre-piano-scaled.jpg", category: "pianos", title: "Piano 2" },
    { id: 6, image: "https://musical.com.gt/wp-content/uploads/1-134.jpg", category: "pianos", title: "Piano 3" },
];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            resolve(instruments);
        });
        getData.then(res => setData(res.find(instruments => instruments.id === parseInt(detalleId))));

    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;