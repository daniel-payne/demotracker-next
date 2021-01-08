const data = {
  id: 'DISP',
  name: 'Data Filter',
  defaultOption: 'ALLR',
  options: [
    { id: 'ALLR', name: 'Show All' },
    { id: 'RECD', name: 'Regions Containing Data' },
  ],
}

export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}
