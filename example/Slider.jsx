import React, { Component } from 'react'
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { withComponentQueries } from '../src/react-component-query'

const componentQueries = [{
  name: 'sm',
  breakpoint: {
    minWidth: 0
  },
  props: {
    viewsToShow: 1
  }
}, {
  name: 'md',
  breakpoint: {
    minWidth: 550
  },
  props: {
    viewsToShow: 2
  }
}, {
  name: 'lg',
  breakpoint: {
    minWidth: 875
  },
  props: {
    viewsToShow: 3
  }
}]

class Slider extends Component {
  render() {
    const { matchedQueries, matchedProps, dimensions } = this.props
    const { sm, md, lg } = matchedQueries
    const { viewsToShow, swipe } = matchedProps
    const { width, height, top, right, bottom, left } = dimensions
    return (
      <ViewPager>
        <Frame style={{ background: '#ccc' }}>
          <Track
            viewsToShow={viewsToShow}
            viewsToMove={viewsToShow}
            contain
          >
            {[0, 1, 2, 3, 4, 5].map(index =>
              <View
                key={index}
                style={{
                  padding: 50,
                  fontSize: 50,
                  textAlign: 'center',
                  color: '#fff'
                }}
              >
                {index + 1}
              </View>
            )}
          </Track>
        </Frame>
        <div style={{ textAlign: 'left' }}>
          <h3>matchedQueries</h3>
          <pre>
            {JSON.stringify(matchedQueries, null, 2)}
          </pre>
          <h3>matchedProps</h3>
          <pre>
            {JSON.stringify(matchedProps, null, 2)}
          </pre>
          <h3>dimensions</h3>
          <pre>
            {JSON.stringify(dimensions, null, 2)}
          </pre>
        </div>
      </ViewPager>
    )
  }
}

export default withComponentQueries(Slider, componentQueries)
