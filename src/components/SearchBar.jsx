import React, { Component } from "react";
import 'boxicons/css/boxicons.css';


export class SearchBar extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="card mt-5 p-5">
            <div className="input-group input-group-merge">
              <span className="input-group-text search-icon" id="basic-addon-search31">
                <i class="bx bx-search-alt"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-lg search-input"
                placeholder="Search your picture"
                aria-label="Search..."
                aria-describedby="basic-addon-search31"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
