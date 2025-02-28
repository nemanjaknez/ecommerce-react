import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import Rating from '../Rating/Rating';
import './ProductSingle.css';
import '../../Assets/Images/img1.jpg';
import ReviewForm from '../ReviewForm/ReviewForm';

const ProductSingle = () => {

    const { data, addToCart } = useContext(ShopContext);
    const { productId } = useParams();

    const [activeTab, setActiveTab] = useState('info');

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(data.find((item) => item.id === Number(productId)));
    }, [data]);

    const getFormData = (formData) => {
        setProduct(prevProduct => ({
            ...prevProduct,
            reviews: [...(prevProduct.reviews || []), formData]
        }));
    };

    let image;

    try {
        image = require('../../Assets/Images/' + product?.thumbnail);
    } catch(error) {
        image = require('../../Assets/Images/img1.jpg');
    }

    return(
        <div className="product-single">
            <div className="content-top">
                <div className="thumbnail-holder">
                    <img src={image} alt={product?.name} />
                </div>
                <div className="product-summary">
                    <h1>{product?.brand}</h1>
                    <p>{product?.name}</p>
                    <Rating rating={product?.rating} />
                    <p>{product?.price}</p>
                    <p>{product?.description}</p>
                    <ul>
                        <li>Gender: <span>{product?.gender}</span></li>
                        <li>Category: <span>{product?.category}</span></li>
                    </ul>
                    <button
                        className="add-to-cart"
                        onClick={() => addToCart(product?.id)}
                    >Add to cart</button>
                </div>
            </div>
            <div className="content-bottom">
                <ul className="tabs">
                    <li
                        className={activeTab === 'info' ? 'active' : ''}
                        onClick={() => setActiveTab('info')}
                    >Additional Info</li>
                    <li
                        className={activeTab === 'reviews' ? 'active' : ''}
                        onClick={() => setActiveTab('reviews')}
                    >Reviews</li>
                </ul>
                <div className="additional-info" style={ activeTab !== 'info' ? { display:'none'} : {}}>
                    <ul>
                        <li>Movement: <span>{product?.details?.movement}</span></li>
                        <li>Case Material: <span>{product?.details?.case_material}</span></li>
                        <li>Water Resistance: <span>{product?.details?.water_resistance}</span></li>
                        <li>Features: 
                            {product?.details?.features.map((feature, index) => (
                                <span key={index}>{feature}</span>
                            ))}
                        </li>
                    </ul>
                    
                </div>
                <div className="reviews-section" style={ activeTab !== 'reviews' ? { display:'none'} : {}}>
                    <div>
                        {product?.reviews?.map((reviewItem, index) => (
                            <div key={index} className='review-item'>
                                <p>{reviewItem?.name}</p>
                                <p>{reviewItem?.review}</p>
                                <p>{reviewItem?.rating}</p>
                            </div>
                        ))}
                    </div>
                    <ReviewForm getFormData={getFormData}/>
                </div>
            </div>
        </div>
    );
}

export default ProductSingle;