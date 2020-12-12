import React from "react";
import "./SummaryCard.css";

const SummaryCard = ({ digit, title }) => {
  return (
    <div className="summary-card">
      <p style={{ color: "#8e8be6" }}>{digit}</p>
      <p style={{ fontSize: 15 }}>{title}</p>
    </div>
  );
};

export default SummaryCard;
