import React, { Component } from "react";

export class ImageItem extends Component {
  render() {
    return (
      <>
        <div className="item">
          <a className="image-founded" href="/">
            <div className="card bg-dark  text-white">
              <img
                className="card-img"
                src={this.props.url}
                alt="Card image"
              />
              <div className="profile-user card-img-overlay d-flex card-title">
                <img
                  className="profile-image"
                  src={this.props.profileImg.small}
                  alt="hi"
                />
                <h5 className="card-title ">{this.props.userName}</h5>
              </div>
            </div>
          </a>
        </div>
      </>
    );
  }
}

export default ImageItem;
