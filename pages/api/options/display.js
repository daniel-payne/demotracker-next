const data = {
  id: 'DISP',
  name: 'Display',
  defaultOption: 'ALLR',
  options: [
    { id: 'ALLR', name: 'All Regions', icon: 'DIS-OFF' },
    { id: 'RECD', name: 'Only Regions Containing Data', icon: 'DIS-ON' },
  ],
}

export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}
