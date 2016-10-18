export default function toPairs(obj) {
  return Object.keys(obj).map(key => [key, obj[key]])
}
