import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css'

import Artist from './components/Artist'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Popular Artists</h1>
        </div>
        <div className="App-content">
          <Grid>
            <div className="artists-list">
              <Artist />
            </div>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App;

const Grid = styled.div`
  margin: 30px auto;
`