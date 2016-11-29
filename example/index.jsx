import React, { Component, PropTypes, Children } from 'react'
import ReactDOM from 'react-dom'
import { matchedProps, withComponentQueries } from '../src/react-component-query'

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

class MyResponsiveComponent extends Component {
  render() {
    const { viewsToShow } = matchedProps(this.props.queries, {
      sm: { viewsToShow: 1 },
      md: { viewsToShow: 2 },
      lg: { viewsToShow: 3 }
    })
    return (
      <div>
        <span>{viewsToShow}</span>
      </div>
    )
  }
}
MyResponsiveComponent = withComponentQueries(MyResponsiveComponent, {
  sm: { minWidth: 300 },
  md: { minWidth: 600 },
  lg: { minWidth: 900 }
})

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent/>
        <MyResponsiveComponent/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
