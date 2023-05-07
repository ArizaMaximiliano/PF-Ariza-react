import React from "react";


export const Text = ({greeting}) =>{
    const style = {
        margin: '0.5em',
        paddingLeft: 0,
        listStyle: 'none'
      };

    return (
        <h1 style={style}>{greeting}</h1>
    );
}

export default Text;