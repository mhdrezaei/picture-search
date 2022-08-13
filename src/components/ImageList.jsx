import React, { Component } from "react";
import ImageItem from "./image-item/ImageItem";

export class ImageList extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="col-md-12">
          <div className="grid">
            {this.props.items.map((item) => {
              return (
                <ImageItem
                key={item.id}
                  url={item.urls.small}
                  profileImg={item.user.profile_image}
                  userName={item.user.username}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageList;
