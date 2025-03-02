import { useState, useContext, useEffect, useRef } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductListItem from '../Components/ProductListItem/ProductListItem';
import Sort from '../Components/Sort/Sort';
import PriceFilter from '../Components/PriceFilter/PriceFilter';
import Checkbox from '../Components/Checkbox/Checkbox';

const ShopWithFilters = () => {

    const {data, addToCart} = useContext(ShopContext);

    const [sortedData, setSortedData] = useState([]);

    const [priceRange, setPriceRange] = useState([100,10000]);

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data.length === 0) return;

        setFilteredData(data);
    }, [data]);

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

    //get all movement types
    useEffect(() => {
        if (filteredData.length === 0) return;

        let types = [];

        for(let item of filteredData) {
            if(! types.includes(item.details.movement)) {
                types.push(item.details.movement);
            }
        }

        setMovementTypes(types);

    }, [filteredData]);

    const [movementTypes, setMovementTypes] = useState([]);
    const [checkedValues, setCheckedValues] = useState([]);

    const getCheckedValue = (obj) => {
        setCheckedValues(prev => {
            const key = Object.keys(obj)[0];
            if (obj[key]) {
                return [...prev, key];
            } else {
                return prev.filter(item => item !== key);
            }
        });
    }

    return(
        <div>
            <h1>Shop With Filters</h1>
            <p>This is shop page...</p>
            <Sort data={data} getSortedData={getSortedData} />
            <div className="product-list-holder">
                <div className="product-list columns-two">
                    {sortedData
                        .filter((item) => 
                            (checkedValues.length === 0 || checkedValues.includes(item.details.movement)) &&
                            item.price >= priceRange[0] && item.price <= priceRange[1]
                        )
                        .map((item) => (
                            <ProductListItem key={item.id} itemData={item} addToCart={addToCart} />
                        ))
                    }
                </div>
                <div className="sidebar">
                    <PriceFilter
                        minPrice={minPrice.current}
                        maxPrice={maxPrice.current}
                        priceRange={priceRange}
                        handlePriceFilter={handlePriceFilter}
                    />

                    <div className="custom-filter">
                        <h4>Movement Type</h4>
                        <ul>
                            {movementTypes.map((item, index) => (
                                <li key={index}>
                                    <Checkbox item={item} index={index} getCheckedValue={getCheckedValue} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopWithFilters;