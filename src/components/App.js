import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'

import SearchBar from './SearchBar'
import SearchDetail from './SearchDetail'

export class App extends Component {
    state = {
        result : []
    }
    fetchData(term){
        const response = axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query : term
            },
            headers:{
            Authorization: 'Client-ID fRICJ3kWAmMKD8oNy52wYHH6hlcCA5GtY23WuVmQ3_U'  
            }
        }).then((response)=> {
            console.log(response.data.results)
            this.setState({result : response.data.results})
         })

        } 

  render() {
    return (
      <div>
        <SearchBar onSubmitForm={this.fetchData} />
        <SearchDetail/>
      </div>
    )
  }
}

export default App