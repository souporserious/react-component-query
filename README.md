## React Component Query

[![npm version](https://badge.fury.io/js/react-component-query.svg)](https://badge.fury.io/js/react-component-query)
[![Dependency Status](https://david-dm.org/souporserious/react-component-query.svg)](https://david-dm.org/souporserious/react-component-query)

True component queries 🎉

Write one query and drop the mic 🎙

You're going to love it 👌

Uses [React Measure](https://github.com/souporserious/react-measure) to detect component changes and return matched queries, matched props, and component dimensions.

Check out the [demo page](https://souporserious.github.io/react-component-query/) to see it in action.

## Usage

`npm install react-component-query --save`

```html
<script src="https://unpkg.com/react-component-query/dist/react-component-query.js"></script>
(UMD library exposed as `withComponentQueries`)
```

## Example Usage

```js
import React, { Component } from 'react'
import { withComponentQueries } from 'react-component-query'
import { ViewPager, Frame, Track, View } from 'react-view-pager'

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
    minWidth: 375
  },
  props: {
    viewsToShow: 2
  }
}, {
  name: 'lg',
  breakpoint: {
    minWidth: 800
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
        <Frame>
          <Track
            viewsToShow={viewsToShow}
            viewsToMove={viewsToShow}
            contain
          >
            {[0, 1, 2, 3, 4, 5].map(index =>
              <View key={index}>
                {index + 1}
              </View>
            )}
          </Track>
        </Frame>
      </ViewPager>
    )
  }
}

export default withComponentQueries(Slider, componentQueries)
```

## Running Locally

clone repo

`git clone git@github.com:souporserious/react-component-query.git`

move into folder

`cd ~/react-component-query`

install dependencies

`npm install`

run dev mode

`npm run dev`

open your browser and visit: `http://localhost:8080/`

## Thank You

Initial inspiration for this library came from [React Container Query](https://github.com/d6u/react-container-query).
