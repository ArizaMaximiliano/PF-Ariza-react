import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../itemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () =>{

    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: "Maxi",
            email: 'maxi@outlook.com',
            phone: '123567',
            addres: 'test'
        },
        items: cart.map(instruments =>({ id: instruments.id, title: instruments.title, price: instruments.price, quantity: instruments.quantity})),
        total: totalPrice(),
    }

    if (cart.length === 0){
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Ir a comprar</Link>
            </>
        );
    }

    const orderBuy = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({id}) => console.log(id));
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <button onClick={orderBuy}>Emitir compra</button>
        </>
    )
}

export default Cart