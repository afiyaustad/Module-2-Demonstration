import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "./ProductsData"; // Importing product list

function ProductDetail() {
  const { id } = useParams(); // Get the ID from URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;