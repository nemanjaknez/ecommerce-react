import { useState, useContext, useEffect, useRef } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductListItem from '../Components/ProductListItem/ProductListItem';
import Sort from '../Components/Sort/Sort';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const ShopWithFilters = () => {

    const {data, addToCart} = useContext(ShopContext);

    const [sortedData, setSortedData] = useState([]);

    const [priceRange, setPriceRange] = useState([100,10000]);

    let minPrice = useRef();
    let maxPrice = useRef();

    useEffect(() => {
        if (data.length === 0) return;
        
        let min = data[0].price;
        let max = data[0].price;

        for(let item of data) {

            if(item.price < min) {
                min = item.price;
            }

            if(item.price > max) {
                max = item.price;
            }
        }

        minPrice.current = min;
        maxPrice.current = max;

        setPriceRange([min, max]);
        setSortedData(data);
    }, [data]);

    const getSortedData = (value) => {
        setSortedData(value);
    }

    const handlePriceFilter = (value) => {
        setPriceRange([value[0], value[1]]);
    }

    useEffect(() => {
        let filteredData = data.filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1]);

        setSortedData(filteredData);
    }, [priceRange, data]);

    return(
        <div>
            <h1>Shop With Filters</h1>
            <p>This is shop page...</p>
            <Sort data={data} getSortedData={getSortedData} />
            <div className="product-list-holder">
                <div className="product-list columns-two">
                    {sortedData.map((item) => (
                        <ProductListItem key={item.id} itemData={item} addToCart={addToCart} />
                    ))}
                </div>
                <div className="sidebar">
                    {typeof(minPrice.current) === 'number' && typeof(maxPrice.current) === 'number' && (
                        <div className="price-filter">
                            <h4>Filter by Price</h4>
                            <RangeSlider
                                min={minPrice.current}
                                max={maxPrice.current}
                                defaultValue={priceRange}
                                step={10}
                                onInput={(value) => handlePriceFilter(value)}
                            />
                            <div className="price-label-holder">
                                <span className="price-label">Price:</span>
                                <span className="min-price">${priceRange[0]}</span>
                                <span className="dash">-</span>
                                <span className="max-price">${priceRange[1]}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShopWithFilters;