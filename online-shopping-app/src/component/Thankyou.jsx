import React, { useEffect, useState } from 'react';

const ThankYou = () => {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        // Retrieve order data from local storage
        const orderData = localStorage.getItem('orderData');
        if (orderData) {
            setOrderData(JSON.parse(orderData));
        }
    }, []);

    return (
        <div className="mx-auto col-10 col-md-8 col-lg-6">
            {orderData && (
                <div className="  d-flex justify-content-center align-items-center">
                    <div className=" alert alert-success card mx-auto col-10 col-md-8 col-lg-6">
                        <h1 className="mb-2 text-center">Thank You & Come Again!</h1>
                        <h3 className='text-center'>Order Details:</h3>
                        <p className="lead text-center">
                            Name: {orderData.name}
                        </p>
                        <p className="lead text-center">
                            Email:{orderData.email}
                        </p>
                        <p className="lead text-center">
                            Address: {orderData.address}
                        </p>
                        <h3 className='text-center'>Order Summary:</h3>
                        <p className="lead text-center">
                            Total Price: ${orderData.totalPrice}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThankYou;
