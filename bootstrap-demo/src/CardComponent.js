import React from 'react';
import './CardComponent.css'; // Import custom CSS

const CardComponent = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card custom-card shadow-lg">
        <img src="https://picsum.photos/200" className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">React Bootstrap Card</h5>
          <p className="card-text">
            This is a simple Bootstrap card component styled using both Bootstrap and custom CSS.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;