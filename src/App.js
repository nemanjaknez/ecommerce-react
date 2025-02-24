import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductSingle from "./Components/ProductSingle/ProductSingle";
import Shop from "./Pages/Shop";
import ShopWithFilters from "./Pages/ShopWithFilters";
import ProductCategory from "./Pages/ProductCategory";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import './App.css';

const App = () => {
    return(
        <BrowserRouter>
            <Header />
            <div className="page-content">
                <div className="container">
                    <Routes>
                        <Route path="" element={<Shop />} />
                        <Route path="/shop-with-filters" element={<ShopWithFilters />} />
                        <Route path="/product-category" element={<ProductCategory />}/>
                        <Route path="/product" element={<ProductSingle />}>
                            <Route path=":productId" element={<ProductSingle />} />
                        </Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;