import React, { Component } from "react";
import "./GlassesItem.css";

class GlassesItem extends Component {
  render() {
    const { product, setSelectedProduct } = this.props;

    return (
      <button
        className="glasses-item"
        onClick={() => setSelectedProduct(product)}
      >
        <img
          className="glasses-item-image"
          src={product.url}
          alt={product.url}
        />
      </button>
    );
  }
}

export default GlassesItem;
