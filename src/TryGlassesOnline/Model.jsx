import React, { Component } from "react";
import "./Model.css";

class Model extends Component {
  render() {
    const { url, name, desc } = this.props.selectedProduct;

    return (
      <div className="model">
        <img
          className="model-image"
          src="./glassesImage/model.jpg"
          alt="model.jpg"
        />
        <img className="model-glasses" src={url} alt={url} />
        <div className="model-glasses-info">
          <h5>{name}</h5>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default Model;
