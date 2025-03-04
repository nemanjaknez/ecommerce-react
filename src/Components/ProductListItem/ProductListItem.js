import { Link } from 'react-router-dom';
import './ProductListItem.css';
import { useEffect, useState } from 'react';

 const ProductListItem = ({ itemData, addToCart }) => {

    let productImage;

    try {
        productImage = require('../../Assets/Images/' + itemData.thumbnail);
    } catch(error) {
        productImage = require('../../Assets/Images/img1.jpg');
    }

    const [popupVisible, setPopupVisible] = useState(false);
    const [animatePopup, setAnimatePopup] = useState(false)

    const handleAddToCart = (id) => {
        addToCart(id);

        setPopupVisible(true);

        setTimeout(() => {
            setAnimatePopup(false);

            setTimeout(() => {
                setPopupVisible(false);
            }, 300)
            
        }, 3000);
    }

    useEffect(() => {
        if(popupVisible) {
            setAnimatePopup(true);
        }
    }, [popupVisible]);

    return(
        <article className="product-item">
            <Link to={'/product/' + itemData.id}>
                <img src={productImage} alt={itemData.name} />
            </Link>
            <div className="content">
                <Link to={'/product/' + itemData.id}>
                    <h4 className="product-title">{itemData.brand}</h4>
                </Link>
                <p className="product-subtitle">{itemData.name}</p>
                <p className="price">${itemData.price}</p>
                <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(itemData.id)}
                >Add to cart</button>
                {popupVisible && (
                    <div className={`popup-message ${animatePopup ? "show" : ""}`}>Product added to cart</div>
                )}
            </div>
        </article>
    );
 }

 export default ProductListItem;