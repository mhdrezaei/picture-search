import React, { Component } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'

import SearchBar from './SearchBar'
import SearchDetail from './SearchDetail'

export class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <SearchDetail/>
      </div>
    )
  }
}

export default App