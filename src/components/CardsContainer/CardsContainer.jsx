import React from "react";
import journeys from "../../config/journeys.json";
import Card from "../Card";
import "./CardContainer.css";

function CardContainer() {
  return (
    <div className="card-container row justify-content-center">
      {journeys.map(journey => (
        <Card key={journey.name} journey={journey} />
      ))}
    </div>
  );
}

export default CardContainer;
