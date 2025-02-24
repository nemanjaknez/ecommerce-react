import React, { useState, useEffect, createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseURL = 'https://gist.githubusercontent.com/nemanjaknez/6fc84a6274fb058bcd69992cd88f3958/raw/6d38557f0086aaf41f5d0b40675bfa0db3c83501/ecommerce-data.json';

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(baseURL);
            const responseData = await response.json();
            setData(responseData);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [cartItems, setCartItems] = useState([]);

    const getDefaultCart = (allProducts) => {
        let cart = {};

        for(let productItem of allProducts) {
            cart[productItem.id] = 0;
        }

        setCartItems(cart);
    }

    useEffect(() => {
        getDefaultCart(data);
    }, [data]);

    const addToCart = (productId) => {
        setCartItems((prev) => ({...prev, [productId]: prev[productId] + 1}));
    }

    const removeFromCart = (productId) => {
        setCartItems((prev) => ({...prev, [productId]: prev[productId] - 1}));
    }

    return(
        <ShopContext.Provider value={{data, loading, error, cartItems, addToCart, removeFromCart}}>
            {props.children}
        </ShopContext.Provider>
    );

}

export default ShopContextProvider;