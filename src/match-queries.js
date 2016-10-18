import toPairs from './to-pairs'

export default function matchQueries(queries) {
  const rules = []

  toPairs(queries).forEach(([selectorName, { minWidth, maxWidth, minHeight, maxHeight }]) => {
    rules.push([
      selectorName,
      {
        minWidth: minWidth || 0,
        maxWidth: maxWidth || Infinity,
        minHeight: minHeight || 0,
        maxHeight: maxHeight || Infinity
      }
    ])
  })

  return function ({ width, height }) {
    const selectorMap = {}

    rules.forEach(([selectorName, { minWidth, maxWidth, minHeight, maxHeight }]) => {
      selectorMap[selectorName] = (
        minWidth <= width && width <= maxWidth &&
        minHeight <= height && height <= maxHeight
      )
    })

    return selectorMap
  }
}
