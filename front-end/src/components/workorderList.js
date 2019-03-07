import React, { Component } from "react";

import workorderCard from "./workorderCard";

const workorderList = (props) => {
    return (
        <div className="workorderlist">
        {this.props.workorders.map(work => (
            <workorderCard key={work.id} work={work} />
        ))}
        </div>
      </div>
    )
}

export default workorderList;