import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useContext, useEffect, useState } from "react";

const Header = () => {

    const { cartItems } = useContext(ShopContext);

    const [totalCartItems, setTotalCartItems] = useState(0);
    
    useEffect(() => {
        let total = 0;

        for(let i in cartItems) {
            total += cartItems[i];
        }

        setTotalCartItems(total);
    }, [cartItems]);

    return(
        <header>
            <div className="logo-holder">
                <Link to="">
                    <p>Temp logo</p>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="" className={({isActive}) => isActive ? "active" : ""}>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop-with-filters" className={({isActive}) => isActive ? "active" : ""}>Shop with Filters</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product-category" className={({isActive}) => isActive ? "active" : ""}>Product Category</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="additional-links">
                <Link to="/login">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="cart-count">{totalCartItems}</span>
                </Link>
            </div>
        </header>
    );
}

export default Header;