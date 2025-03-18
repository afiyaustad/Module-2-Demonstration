import React from "react";
import { Link } from "react-router-dom";
import products from "./ProductsData"; // Importing product list
function Products() {
  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description.substring(0, 100)}...</p> 
            <p><strong>Price:</strong> {product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;