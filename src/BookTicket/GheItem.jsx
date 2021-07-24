import React, { Component, Fragment } from "react";

class GheItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isBooking: false,
  //   };
  // }

  handleBookTicket = () => {
    const { ghe, bookTicket } = this.props;
    bookTicket(ghe);

    // this.setState({
    //   isBooking: !this.state.isBooking,
    // });
  };

  renderEmptyChair = (SoGhe) => {
    const foundIndex = this.props.danhSachGheDangDat.findIndex(
      (item) => item.SoGhe === SoGhe
    );

    if (foundIndex === -1) {
      return (
        <button
          style={{ width: 50, height: 50 }}
          className="btn btn-secondary"
          onClick={this.handleBookTicket}
        >
          {SoGhe}
        </button>
      );
    }

    return (
      <button
        style={{ width: 50, height: 50 }}
        className="btn btn-success"
        onClick={this.handleBookTicket}
      >
        {SoGhe}
      </button>
    );
  };

  render() {
    const { SoGhe, TrangThai } = this.props.ghe;

    return (
      <div>
        {TrangThai ? (
          <button
            style={{ width: 50, height: 50 }}
            className="btn btn-danger disabled"
          >
            {SoGhe}
          </button>
        ) : (
          // <button
          //   style={{ width: 50, height: 50 }}
          //   className={
          //     this.state.isBooking ? "btn btn-success" : "btn btn-secondary"
          //   }
          //   onClick={this.handleBookTicket}
          // >
          //   {SoGhe}
          // </button>
          this.renderEmptyChair(SoGhe)
        )}
      </div>
    );
  }
}

export default GheItem;
