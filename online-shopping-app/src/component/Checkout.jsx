import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/action';

const Checkout = () => {
    // Accessing the state from the Redux store using useSelector hook
    const cartItems = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    // Navigating after place order 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleInputChange = (e) => {
        // Updating the form data state when input values change
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Calculate total price
        const totalPrice = cartItems.reduce(
            (total, item) => total + item.qty * item.price,
            0
        );

        // Clear the cart
        dispatch(clearCart());

        // Prepare order data
        const orderData = {
            ...formData,
            items: cartItems,
            totalPrice: totalPrice.toFixed(2),
        };

        // Storing order data in local storage
        localStorage.setItem('orderData', JSON.stringify(orderData));
        console.log(orderData);

        // Redirecting to the thank you page
        navigate('/thankyou');
    };

    return (
        <>
            {/* Form Container */}
            <div className="container">
                <h1 className="mb-4 text-center pt-2">Checkout</h1>
                <div className="row">
                    <div className="mx-auto col-10 col-md-8 col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address:
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-dark">
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Displaying cart items */}
            <h3 className="text-center pt-5">Your Cart</h3>
            <div className="d-flex justify-content-center mb-5  p-5">
                {cartItems.map((product) => (
                    <div className="col-md-3 mb-4 p-5">
                        <div key={product.id} className="card h-100 text-center p-4">
                            <img src={product.image} alt={product.title} className="h-50 w-100" />
                            <h4 className="card-title  h5">{product.title.substring(0, 12)}...</h4>
                            <p className="card-text  fw-bold">
                                {product.qty} X ${product.price}
                            </p>
                            <p className="card-text  fw-bold">Total : ${product.qty * product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Checkout;
