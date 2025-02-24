import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductListItem from '../Components/ProductListItem/ProductListItem';
import Sort from '../Components/Sort/Sort';

const Shop = () => {

    const {data, loading, error, addToCart} = useContext(ShopContext);

    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        setSortedData(data);
    }, [data]);

    const getSortedData = (value) => {
        setSortedData(value);
    }

    return(
        <div>
            <h1>Shop Page</h1>
            <p>This is shop page...</p>
            <Sort data={data} getSortedData={getSortedData} />
            <div className='product-list columns-three'>
                {sortedData.map((item) => (
                    <ProductListItem key={item.id} itemData={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default Shop;