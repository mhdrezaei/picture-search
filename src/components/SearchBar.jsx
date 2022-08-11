import React, { Component } from "react";
import "boxicons/css/boxicons.css";

export class SearchBar extends Component {
  state = { term: "" };
  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.term)
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="card mt-5 p-5">
            <form onSubmit={this.submitHandler}>
              <div className="input-group input-group-merge">
                <span
                  className="input-group-text search-icon"
                  id="basic-addon-search31"
                >
                  <i className="bx bx-search-alt"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg search-input"
                  placeholder="Search your picture"
                  aria-label="Search..."
                  aria-describedby="basic-addon-search31"
                  onChange={(e) => this.setState({ term: e.target.value })}
                  value={this.state.term}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
