import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { data, cartItems, removeFromCart } = useContext(ShopContext);

    const [totalCartItems, setTotalCartItems] = useState(0);
    
    useEffect(() => {
        let total = 0;

        for(let i in cartItems) {
            total += cartItems[i];
        }

        setTotalCartItems(total);
    }, [cartItems]);

    return(
        <>
            {totalCartItems === 0 && (
                <div className="empty-cart">
                    <p>Your cart is currently empty.</p>
                    <Link to="/" className="button">Return to Shop</Link>
                </div>
            )}

            {totalCartItems !== 0 && (
                <div className="cart-items">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((productItem) => {
                                if(cartItems[productItem.id] > 0) {

                                    let productImage;
                                    try {
                                        productImage = require('../Assets/Images/' + productItem.thumbnail);
                                    } catch(error) {
                                        productImage = require('../Assets/Images/img1.jpg');
                                    }

                                    return(
                                        <tr>
                                            <td>
                                                <Link to={'/product/' + productItem.id}>
                                                    <img src={productImage} alt={productItem.name}/>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/product/' + productItem.id}>
                                                    {productItem.name}
                                                </Link>
                                            </td>
                                            <td>${productItem.price}</td>
                                            <td>{cartItems[productItem.id]}</td>
                                            <td>${productItem.price * cartItems[productItem.id]}</td>
                                            <td>
                                                <button onClick={() => removeFromCart(productItem.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            )}        
        </>       
    );
}

export default Cart;