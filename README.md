## React Component Query

[![npm version](https://badge.fury.io/js/react-component-query.svg)](https://badge.fury.io/js/react-component-query)
[![Dependency Status](https://david-dm.org/souporserious/react-component-query.svg)](https://david-dm.org/souporserious/react-component-query)

This library is heavily inspired by [React Container Query](https://github.com/d6u/react-container-query). This version uses [React Measure](https://github.com/souporserious/react-measure) under the hood to detect component changes. It provides matching queries and component dimensions.

## Usage

`npm install react-component-query --save`

```html
<script src="https://unpkg.com/react-component-query/dist/react-component-query.js"></script>
(UMD library exposed as `withComponentQueries`)
```

## Example Usage

```js
import { matchedProps, withComponentQueries } from 'react-component-query'

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
