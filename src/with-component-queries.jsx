import React, { Component } from 'react'
import Measure from 'react-measure'
import matchQueries from './match-queries'

export default function withComponentQueries(ComposedComponent, queries) {
  return class extends Component {
    state = {
      queries: {},
      dimensions: {}
    }

    _handleMeasure = (dimensions) => {
      this.setState({
        queries: matchQueries(queries)(dimensions),
        dimensions
      })
    }

    render() {
      return (
        <Measure onMeasure={this._handleMeasure}>
          <ComposedComponent
            {...this.state}
            {...this.props}
          />
        </Measure>
      )
    }
  }
}
