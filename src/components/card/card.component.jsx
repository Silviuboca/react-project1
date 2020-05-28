import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img alt="shadows" src={`https://robohash.org/${props.shadow.id}?set=set2&size=180x180`} />
    <h2> {props.shadow.name} </h2>
    <p>{props.shadow.email}</p>
  </div>
);
