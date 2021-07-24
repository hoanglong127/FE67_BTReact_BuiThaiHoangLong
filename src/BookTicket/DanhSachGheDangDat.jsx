import React, { Component } from "react";

class DanhSachGheDangDat extends Component {
  renderDanhSachGheDangDat = () => {
    return this.props.danhSachGheDangDat.map((ghe) => (
      <tr key={ghe.SoGhe}>
        <td>{ghe.SoGhe}</td>
        <td className="text-danger">${ghe.Gia}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.cancelTicket(ghe.SoGhe)}
          >
            Xoá
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <h4 className="text-success">
          Danh sách ghế đã đặt ({this.props.danhSachGheDangDat.length})
        </h4>
        <table className="table mt-3">
          <thead className="thead-light">
            <tr>
              <th>Ghế</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.renderDanhSachGheDangDat()}</tbody>
        </table>
      </div>
    );
  }
}

export default DanhSachGheDangDat;
