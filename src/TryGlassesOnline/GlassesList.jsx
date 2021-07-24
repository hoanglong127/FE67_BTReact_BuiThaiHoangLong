import React, { Component } from "react";
import "./GlassesList.css";
import GlassesItem from "./GlassesItem";

class GlassesList extends Component {
  renderGlassesList = () => {
    return this.props.arrProduct.map((product) => (
      <GlassesItem
        key={product.id}
        product={product}
        setSelectedProduct={this.props.setSelectedProduct}
      />
    ));
  };

  render() {
    return (
      <div className="glasses-list">
        <div className="container glasses-list-container">
          <h3 className="glasses-list-title">Choose Glasses</h3>
          {this.renderGlassesList()}
        </div>
      </div>
    );
  }
}

export default GlassesList;
