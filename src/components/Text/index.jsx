import React from "react";


export const Text = (props) =>{
    const style = {
        margin: '0.5em',
        paddingLeft: 0,
        listStyle: 'none'
      };

    return (
        <h1 style={style}>{props.greeting}</h1>
    );
}

export default Text;