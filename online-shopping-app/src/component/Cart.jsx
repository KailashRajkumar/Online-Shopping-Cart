import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';

const Cart = () => {
  // Accessing the state from the Redux store using useSelector hook
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  // Component to displaying when the cart is empty
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  // Component to displaying cart items
  const cartItems = (product) => {
    return (
      <>
        <div key={product.id} className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = ${product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // Component to displaying buttons
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto ">
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {/* Display empty cart message if cart is empty */}
      {state.length === 0 && emptyCart()}
      
      {/* Display cart items if there are items in the cart */}
      {state.length !== 0 && state.map(cartItems)}
      
      {/* Display buttons */}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
