export default function matchedProps(queries, options) {
  let newOptions = {}

  Object.keys(queries).forEach(queryKey => {
    const optionsQuery = options[queryKey]
    if (queries[queryKey] && optionsQuery) {
      newOptions = {
        ...newOptions,
        ...optionsQuery
      }
    }
  })

  return newOptions
}
