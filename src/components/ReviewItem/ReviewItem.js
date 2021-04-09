import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key, price, img } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '100px',
        marginRight: '-50px',
        overflow: 'hidden',
    };
    return (
        <div style={reviewItemStyle} >
            <img src={img} alt="" />
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br />
            <button
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
    );
};

export default ReviewItem;