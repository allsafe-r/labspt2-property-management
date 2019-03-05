import React from "react";
import "../components/general.css";
const PropertyCard = () => {
  return (
    <div className="property-card">
      <div className="buttons-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <h1>Address</h1>
      <h1>Name</h1>
      <h1>Date</h1>
    </div>
  );
};

export default PropertyCard;
