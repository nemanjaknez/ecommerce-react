import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './PriceFilter.css';

const PriceFilter = ({minPrice, maxPrice, priceRange, handlePriceFilter}) => {

    return(
        <>
            {typeof(minPrice) === 'number' && typeof(maxPrice) === 'number' && (
                <div className="price-filter">
                    <h4>Filter by Price</h4>
                    <RangeSlider
                        min={minPrice}
                        max={maxPrice}
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
        </>
    );
}

export default PriceFilter;