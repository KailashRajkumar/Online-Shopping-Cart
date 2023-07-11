const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product already exists in the cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity if the product exists
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // Add the product to the cart with quantity 1 if it doesn't exist
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        // Removing the product from the cart if quantity is 1
        return state.filter((x) => x.id !== exist1.id);
      } else {
        // Decrease the quantity of the product if its quantity is more than 1
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "CLEAR_CART":
      // Clearing the entire cart
      return [];

    default:
      return state;
  }
};

export default handleCart;
