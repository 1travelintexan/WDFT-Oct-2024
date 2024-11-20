import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    //fetch with .then() and .catch()
    // fetch(`https://fakestoreapi.com/products/${productId}`)
    //   .then((res) => res.json())
    //   .then((parsed) => {
    //     console.log("one single product", parsed);
    //     setProduct(parsed);
    //   })
    //   .catch((err) => console.log(err));

    //fetch with async and await
    // async function getOneProduct(){
    const getOneProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOneProduct();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
    </div>
  );
}

export default ProductDetailsPage;
