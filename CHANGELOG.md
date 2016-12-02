## CHANGELOG
### 0.2.0
Update React Measure to 1.4.2

`withComponentQueries` now expects an array of the following object shape:

```js
{
  name: 'sm',
  breakpoint: {
    minWidth: 0,
    maxWidth: 300
  },
  props: {
    viewsToShow: 1
  }
}
```

Renamed `queries` -> `matchedQueries`

Component will now receive `matchedQueries`, `matchedProps`, and `dimensions` on props

### 0.1.1
Fix UNPKG build to export as `ReactComponentQuery` on window

### 0.1.0
Expose `matchQueries` and everything else under an object rather than just `withComponentQueries`

Added `matchedProps` function to return props active in query ranges

### 0.0.1
Initial release
