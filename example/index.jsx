import React, { Component, PropTypes, Children } from 'react'
import ReactDOM from 'react-dom'
import withComponentQueries from '../src/react-component-query'

import './main.scss';

const MyComponent = withComponentQueries(({ queries: { fullWidth } }) => (
  <div>
    Cool { fullWidth && <span>Query is working!</span> }
  </div>
), {
  fullWidth: {
    minWidth: 600
  }
})

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
