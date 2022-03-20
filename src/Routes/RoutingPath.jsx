
import { Routes, Route } from 'react-router-dom';
import {
    Home, Login, Signup, ProductListing, WishList, Cart, NotFound
} from '../Components';

export function RoutingPath() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

