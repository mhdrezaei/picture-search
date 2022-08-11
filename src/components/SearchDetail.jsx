import React, { Component } from "react";

export class SearchDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="card mt-2 p-2">
          <ul className="d-flex justify-content-evenly align-items-center">
            <li className="d-flex align-items-center">
              <div className="avatar avatar-sm flex-shrink-0 me-3">
                <span className="avatar-initial rounded-circle bg-label-primary">
                  <i className="bx bx-data"></i>
                </span>
              </div>
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <p className="mb-0 color-label-primary">Search Resoult : </p>
                </div>
                <div className="item-progress purple-color">
                  {this.props.imagesFounded}
                </div>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="avatar avatar-sm flex-shrink-0 me-3">
                <span className="avatar-initial rounded-circle bg-label-primary">
                  <i className="bx bx-layer"></i>
                </span>
              </div>
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <p className="mb-0 color-label-primary">Pages number :</p>
                </div>
                <div className="item-progress  purple-color">
                  {this.props.totalPages}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchDetail;
