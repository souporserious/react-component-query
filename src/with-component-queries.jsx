import React, { Component } from 'react'
import Measure from 'react-measure'
import matchQueries from './match-queries'

export default function withComponentQueries(ComposedComponent, queries) {
  return class extends Component {
    state = {
      matchedQueries: {},
      matchedProps: {},
      dimensions: {}
    }

    _handleMeasure = (dimensions) => {
      const { matchedQueries, matchedProps } = matchQueries(queries, dimensions)
      this.setState({
        matchedQueries,
        matchedProps,
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
