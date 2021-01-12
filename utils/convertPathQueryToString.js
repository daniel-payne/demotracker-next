function obsKeysToString(source, joiner = '=', separator = ',') {
  let result = []

  for (const property in source) {
    result.push(`${property}${joiner}${source[property]}`)
  }

  result = result.join(separator)

  if (result) {
    return '?' + result
  }

  return ''
}

export default function convertPathQueryToString(path = '/', query = {}) {
  return path + obsKeysToString(query)
}
