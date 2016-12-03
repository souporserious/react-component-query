# React Component Query

[![npm version](https://badge.fury.io/js/react-component-query.svg)](https://badge.fury.io/js/react-component-query)
[![Dependency Status](https://david-dm.org/souporserious/react-component-query.svg)](https://david-dm.org/souporserious/react-component-query)

True component queries 🎉

Write one query and drop the mic 🎙

You're going to love it 👌

Check out the [demo page](https://souporserious.github.io/react-component-query/) to see it in action 💥

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

## Example Usage w/ stateless component

```js
const ResponsiveSlider = withComponentQueries(({ matchedProps, children }) => (
  <Slider viewsToShow={matchedProps.viewsToShow}>
    {children}
  </Slider>
), [{
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
    minWidth: 600
  },
  props: {
    viewsToShow: 2
  }
}])
```

## `withComponentQueries` HoC (higher-order component)

Accepts an array of key-value pairs which will be your `query`. It uses [React Measure](https://github.com/souporserious/react-measure) under the hood to detect component changes and pass down `matchedQueries`, `matchedProps`, and `dimensions` into your component.

## query
Each object in the queries array requires at least two properties: `name` and `breakpoint`.

| property      | type      | value             |
| ------------- | --------- | ----------------- |
| `name`        | `String`  | (required) The name of the query
| `breakpoint`  | `Object`  | (required) An object of constraints `{ minWidth, maxWidth, minHeight, maxHeight }`|
| `props`       | `String`  | (optional) Any props to be matched against this breakpoint. Last prop in range returned in `matchedProps` |

## matchedQueries

An object of the currently matched queries.

```js
{
  'sm': true,
  'md': true,
  'lg': false
}
```

## matchedProps

The current matched props. For instance, `this.props.matchedProps.viewsToShow` might equal `1` or `3` depending on the last active query.

## dimensions

The same dimensions passed back in [React Measure](https://github.com/souporserious/react-measure/blob/master/README.md#onmeasure-proptypesfunc).

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
