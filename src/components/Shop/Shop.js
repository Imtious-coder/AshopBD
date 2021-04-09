import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    // const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://stark-plateau-41838.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('https://stark-plateau-41838.herokuapp.com/productsByKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="BG">
            <div className="container twin-container">
                {/* Products here... */}
                <div className="product-container">
                    {/* This is the spiner.. */}
                    {
                        products.length === 0 && <div class="spinner-border text-success Spiner" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    }
                    {/* Cards info here... */}
                    {
                        products.map(pd => <Product
                            key={pd.key}
                            showAddToCart={true}
                            handleAddProduct={handleAddProduct}
                            product={pd}
                        ></Product>)
                    }
                </div>
                {/* Cart side here... */}
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="main-button">Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;