import { useEffect, useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/carts/5`);
        const data = await response.json();
        console.log(data);
        const arrayOfProductDetails = [];
        for (let i = 0; i < data.products.length; i++) {
          const productId = data.products[i].productId;
          const productQuantity = data.products[i].quantity;
          const responseInCart = await fetch(
            `https://fakestoreapi.com/products/${productId}`
          );
          const dataFromCart = await responseInCart.json();
          dataFromCart.productQuantity = productQuantity;
          arrayOfProductDetails.push(dataFromCart);
        }
        console.log(arrayOfProductDetails);
        setCartProducts(arrayOfProductDetails);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);

  return <div>Cart</div>;
};
export default Cart;
