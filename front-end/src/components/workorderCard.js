import React, { Component } from "react";



const workorderCard = (props) => {
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
    )
}

export default workorderCard;