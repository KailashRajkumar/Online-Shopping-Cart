// For Adding Item to Cart

export const addCart = (Product) =>{
    return{
        type : "ADDITEM",
        payload : Product
    }
}

// For Delete Item From Cart

export const delCart = (Product) =>{
    return{
        type : "DELITEM",
        payload : Product
    }
}

// For Clear Cart Item

export const clearCart = () => {
    return {
      type: "CLEAR_CART",
    };
  };