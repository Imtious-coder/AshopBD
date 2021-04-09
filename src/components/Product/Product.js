import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product pt-5 pb-5">
            <div className="row">
                {/* Images here... */}
                <div className="col-md-4 ImageBG">
                    <img className="Images" src={img} alt="img" />
                </div>
                {/* Details here... */}
                <div className="col-md-8">
                    <div className="Product-details">
                        <h4><Link className="product-name" to={"/product/" + key}>{name}</Link></h4>
                        <p>By: {seller}</p>
                        <h5>${price}</h5><br />
                        <small><b>Only {stock} left in stock - Order soon</b></small>  <br /> <br />
                        {props.showAddToCart === true && <button
                            className="main-button"
                            onClick={() => props.handleAddProduct(props.product)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Product;