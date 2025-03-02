import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {

    const [activeItem, setActiveItem] = useState('');

    return(
        <header>
            <div className="logo-holder">
                <Link to="">
                    <p>Temp logo</p>
                </Link>
            </div>
            <nav>
                <ul>
                    <li onClick={() => setActiveItem('')} className={activeItem === '' ? "active" : ""}>
                        <Link to="">Shop</Link>
                    </li>
                    <li onClick={() => setActiveItem('shop-with-filters')} className={activeItem === 'shop-with-filters' ? "active" : ""}>
                        <Link to="/shop-with-filters">Shop with Filters</Link>
                    </li>
                    <li onClick={() => setActiveItem('product-category')} className={activeItem === 'product-category' ? "active" : ""}>
                        <Link to="/product-category">Product Category</Link>
                    </li>
                </ul>
            </nav>
            <div className="additional-links">
                <Link to="/login">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
            </div>
        </header>
    );
}

export default Header;