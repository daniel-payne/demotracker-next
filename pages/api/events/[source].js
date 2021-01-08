const data = { id: 123 }

export default (req, res) => {
  const {
    query: { source },
  } = req

  const [option, range = '1970'] = source.split('-')

  console.log('GETTING DATA ' + option + range)

  res.statusCode = 200
  res.json({
    option,
    range,
  })
}
