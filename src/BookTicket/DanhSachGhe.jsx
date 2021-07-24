import React, { Component } from "react";
import GheItem from "./GheItem";

class DanhSachGhe extends Component {
  renderDanhSachGhe = () => {
    return this.props.danhSachGhe.map((ghe) => (
      <div key={ghe.SoGhe} className="col-3 mt-3">
        <GheItem
          ghe={ghe}
          danhSachGheDangDat={this.props.danhSachGheDangDat}
          bookTicket={this.props.bookTicket}
        />
      </div>
    ));
  };

  render() {
    return (
      <div className="text-center mb-4">
        <div className="rounded-lg p-3" style={{ backgroundColor: "#ddd" }}>
          <h5 className="mb-0">Tài xế</h5>
        </div>
        <div className="row">{this.renderDanhSachGhe()}</div>
      </div>
    );
  }
}

export default DanhSachGhe;
