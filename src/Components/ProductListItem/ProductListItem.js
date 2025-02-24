import { Link } from 'react-router-dom';
import './ProductListItem.css';

 const ProductListItem = ({ itemData, addToCart }) => {

    let productImage;

    try {
        productImage = require('../../Assets/Images/' + itemData.thumbnail);
    } catch(error) {
        productImage = require('../../Assets/Images/img1.jpg');
    }

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
                    onClick={() => addToCart(itemData.id)}
                >Add to cart</button>
            </div>
        </article>
    );
 }

 export default ProductListItem;