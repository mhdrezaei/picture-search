import React, { Component } from "react";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";

import SearchBar from "./SearchBar";
import SearchDetail from "./SearchDetail";
import ImageList from "./ImageList";

export class App extends Component {
  state = {
    images: [],

    founded: 0,
    pages: 0,
  };
  fetchData = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID fRICJ3kWAmMKD8oNy52wYHH6hlcCA5GtY23WuVmQ3_U",
      },
    });
    console.log(response);
    this.setState({
      images: response.data.results,
      founded: response.data.total,
      pages: response.data.total_pages,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitForm={this.fetchData} />
        {this.state.founded && (
          <SearchDetail
            imagesFounded={this.state.founded}
            totalPages={this.state.pages}
          />
        )}
        {this.state.founded && <ImageList items={this.state.images} />}
      </div>
    );
  }
}

export default App;
