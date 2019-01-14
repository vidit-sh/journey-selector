import React from "react";

function Card({ journey }) {
  return (
    <div className="col-3 mb-4">
      <div className="card ">
        <a href={journey.url}>
          <img
            src={journey.imageUrl}
            className="card-img-top"
            alt={journey.title}
          />
          <div className="card-body text-body">
            <h5 className="card-title">{journey.title}</h5>
            <p className="card-text">{journey.detail}</p>
          </div>
          {journey.footer ? (
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          ) : null}
        </a>
      </div>
    </div>
  );
}

export default Card;
