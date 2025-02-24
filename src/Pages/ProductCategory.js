import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductCategory = () => {

    const {data, loading, error} = useContext(ShopContext);

    return(
        <div>
            <h1>Product Category</h1>
            <p>This is product category page...</p>
        </div>
    );
}

export default ProductCategory;