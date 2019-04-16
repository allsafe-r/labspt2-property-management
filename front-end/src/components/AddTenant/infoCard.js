
import React from "react";

const HousingInfo = () => {
  return (
    <div className="info-container">
      <h1>Housing Info</h1>
      <div className="housing-info ">
        <div className="start-end">
          <input type="date" name="start" />
          <input type="date" name="end" />
        </div>
        <div className="option-properties yes">
          <select>
            <option value="property-1">property 1</option>
            <option value="property-2">property 2</option>
            <option value="property-3">property 3</option>
            <option value="property-4">property 4</option>
          </select>
        </div>
        <div className="info-button yes">
          <button>Send Contract</button>
        </div>
      </div>
    </div>
  );
};

export default HousingInfo;