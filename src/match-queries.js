export default function matchQueries(queries, { width, height }) {
  let matchedQueries = {}
  let matchedProps = {}

  queries.forEach(({
    name,
    breakpoint: {
      minWidth = 0,
      maxWidth = Infinity,
      minHeight = 0,
      maxHeight = Infinity
    },
    props
  }) => {
    const queryMatched = (
      minWidth <= width && width <= maxWidth &&
      minHeight <= height && height <= maxHeight
    )

    matchedQueries[name] = queryMatched

    if (queryMatched && props) {
      matchedProps = {
        ...matchedProps,
        ...props
      }
    }
  })

  return {
    matchedQueries,
    matchedProps
  }
}
