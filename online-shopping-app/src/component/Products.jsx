import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Products = () => {
  // Implementing State variables
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetching products data from Fake Store API
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const responseData = await response.json();
        setData(responseData);
        setFilter(responseData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Adding Loading skeleton component
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  // Filtering the products based on category
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  // Rendering the products list
  const ShowProducts = () => {
    return (
      <>
        {/* Filter buttons */}
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            // Showing all products
            onClick={() => {
              setFilter(data); 
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            // Filtering by men's clothing
            onClick={() => {
              filterProduct("men's clothing"); 
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
             // Filter by women's clothing
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            // Filtering by jewelery
            onClick={() => {
              filterProduct('jewelery'); 
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
             // Filtering by electronics
            onClick={() => {
              filterProduct('electronics');
            }}
          >
            Electronic
          </button>
        </div>

        {/* Displaying filtered products */}
        {filter.map((Product) => {
          return (
            <div className="col-md-3 mb-4" key={Product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={Product.image}
                  className="card-img-top"
                  alt={Product.title}
                  height={250}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {Product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${Product.price}</p>
                  <NavLink
                    to={`/products/${Product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  // Rendering loading state 
  if (loading) {
    return (
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <Loading />
        </div>
      </div>
    );
  }

  // Rendering error state
  if (error) {
    return (
      <div className="container my-5 py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  // Rendering products component
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <ShowProducts />
      </div>
    </div>
  );
};

export default Products;
