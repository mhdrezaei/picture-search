import React, { Component, useRef } from "react";

export class ImageItem extends Component {
  constructor(props){
    super(props);
    this.state = { span : 0}

     this.imageRef = React.createRef();
  }
  componentDidMount(){
    this.imageRef.current.addEventListener('load' ,()=>{
      const span = Math.ceil(this.imageRef.current.clientHeight / 10);
      this.setState({span})
    })
  }

  render() {
    return (
      <>
        <div className="item" style={{gridRowEnd : `span ${this.state.span}` }}>
          <a className="image-founded" href="/">
            <div className="card bg-dark  text-white">
              <img
                ref={this.imageRef}
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
