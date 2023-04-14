import React from "react";
import Text from "../Text";

export const ItemListContainer = (props) =>{
    return (
        <Text greeting={props.texto} />
    );
}

export default ItemListContainer;