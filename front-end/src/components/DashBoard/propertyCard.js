import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = props => {
  return (
    <div className="noteInfo">
      <Link to={`/admin/view-property/${props.id}`}>
        <h1>{props.name}</h1>
        <h1>{props.address}</h1>
        <h1>{props.city}</h1>
        <h1>{props.state}</h1>
        <h1>{props.zipcode}</h1>
      </Link>
    </div>
  );
};

export default PropertyCard;
