import React from "react";

const HousingInfo = () => {
  return (
    <div className="info-container">
      <input type="date" name="start" />
      <input type="date" name="end" />
      <select>
        <option value="property-1">property 1</option>
        <option value="property-2">property 2</option>
        <option value="property-3">property 3</option>
        <option value="property-4">property 4</option>
      </select>
      <button>Send Contract</button>
    </div>
  );
};

export default HousingInfo;
