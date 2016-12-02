import React, { Component, PropTypes, Children } from 'react'
import ReactDOM from 'react-dom'
import { matchedProps, withComponentQueries } from '../src/react-component-query'
import Slider from './Slider'

import './main.scss';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Resize browser to see <em>viewsToShow</em> change</h2>
        <Slider/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
