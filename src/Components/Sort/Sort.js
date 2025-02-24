import './Sort.css';

const Sort = ({ data, getSortedData }) => {

    const handleSelect = (e) => {
        const sortType = e.target.value;

        let sorted = [];

        if(sortType === 'price_asc') {
            sorted = [...data].sort((a,b) => a.price - b.price);
        } else if(sortType === 'price_desc') {
            sorted = [...data].sort((a,b) => b.price - a.price);
        }

        if(sorted.length) {
            getSortedData(sorted);
        } else {
            getSortedData(data);
        }
    }

    return(
        <div className="sort-holder">
            <div className="sort">
                <label>Sort by:</label>
                <select onChange={(e) => handleSelect(e)}>
                    <option value="">Default</option>
                    <option value="price_asc">Price: low to high</option>
                    <option value="price_desc">Price: high to low</option>
                </select>
            </div>
        </div>
    );
}

export default Sort;