import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState();

  useEffect(() => {
    // To fetch the list of products, set up an effect with the `useEffect` hook:
    //**********.then() & .catch()********* */
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("the data:", data);
    //     // setProducts(data);
    //   })
    //   .catch((err) => console.log(err));

    //************async & await  *****************/
    //function keyword example
    // async function getAllProducts(){}
    //with arrow function syntax
    const getAllProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const parsed = await res.json();
        console.log("parsed", parsed);
        setProducts(parsed);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products &&
        products.map((product) => {
          return (
            <Link key={product.id} to={`/product/details/${product.id}`}>
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "150px" }}
                />
                <h6 className="title">{product.title}</h6>
                <h6>{product.category}</h6>
                <h6>{product.price}</h6>
                <h6>{product.description}</h6>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ProductListPage;
