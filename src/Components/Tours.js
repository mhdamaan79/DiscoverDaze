import React from "react";
import Card from "./Card.js";
import logo from "../Assets/images/logo.png";

const Tours = (props) => {
  function getId(id) {
    props.removeTour(id);
  }

  return (
    <div className="container">
      <div className="logoTitleContainer">
        <img src={logo} alt="logo" className="logo"/>
        {/* <h2 className="title">DiscoverDaze</h2> */}
      </div>

      <div className="cardsContainer">
        {props.tours.map((tour) => {
          return <Card tour={tour} getRemoveId={getId} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
