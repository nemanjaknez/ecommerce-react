import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { data, cartItems, removeFromCart } = useContext(ShopContext);

    return(
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
    );
}

export default Cart;